import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { fetchProducts, realtimeconnection, } from '../src/store/slices/product.js'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Navigation from './navigation/Navigation.jsx'


const BASE_URL = import.meta.env.VITE_BASE_URL;
function App() {
    const status = useSelector((state) => state.products.status);

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(fetchProducts());
        console.log("Products fetched");


    }, []);
    if (status === 'loading') {
        return <div className='flex justify-center items-center text-2xl font-extrabold'> Loading . . . </div>
    }
    else {
        return (
            <>
                <Navigation />
            </>
        )
    }

}

export default App
