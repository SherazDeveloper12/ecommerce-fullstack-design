
import { fetchProducts, fetchProductsLocally, realtimeconnection, } from '../src/store/slices/product.js'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Navigation from './navigation/Navigation.jsx'
import { currentUser, fetchToken } from './store/slices/auth.js'



const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
    const {Products, status} = useSelector((state) => state.products);
    console.log("Status as inital console log in App.jsx:", status);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    useEffect(() => {
           dispatch(fetchToken());
           dispatch(fetchProductsLocally());
           dispatch(fetchProducts());
       } , []);
    useEffect(() => {
        
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

    useEffect(() => {
        if (token) {
            dispatch(currentUser(token));
        }

    }, [token]);


    return (
        ((status === 'loading' || Products.length === 0) ?
            <div className='flex justify-center items-center text-2xl font-extrabold'> Loading . . . </div>
            :

            <>
                <Navigation />
            </>
        )
    )
}

export default App
