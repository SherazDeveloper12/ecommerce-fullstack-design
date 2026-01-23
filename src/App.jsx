import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { fetchProducts, realtimeconnection, } from '../src/store/slices/product.js'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Navigation from './navigation/Navigation.jsx'
import { currentUser, fetchToken } from './store/slices/auth.js'
import { current } from '@reduxjs/toolkit'


const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
  const status = useSelector((state) => state.products.status);
  const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentUser(token));
    }, [token]);
    useEffect(() => {
        dispatch(fetchToken());
        dispatch(fetchProducts());
        if (token) {
            dispatch(currentUser(token));
        }
         const eventsource = new EventSource(`${BASE_URL}/products/stream`);
               
               eventsource.onmessage = function (event) {
                   const parsedData = JSON.parse(event.data);
                   console.log('Received data from SSE:', parsedData);
                   // You can dispatch an action to update the Redux store here
                   
              dispatch(realtimeconnection(parsedData));
                
               }
               return () => {
           eventsource.close();  // Connection band karo
       };
    }, []);
    return (
 ((status === 'loading') ?
        <div className='flex justify-center items-center text-2xl font-extrabold'> Loading . . . </div>
        :

        <>
            <Navigation />
        </>
    )
)
}

export default App
