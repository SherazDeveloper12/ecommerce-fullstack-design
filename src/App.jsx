
import { fetchProducts, fetchProductsLocally, } from '../src/store/slices/product.js'
import { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Navigation from './navigation/Navigation.jsx'
import { currentUser, fetchToken, setTempID } from './store/slices/auth.js'
import { fetchCartFromStorage } from './store/slices/cart.js'
import { fetchOrders, fetchOrdersbyuserid } from './store/slices/order.js'
import { socket } from './lib/socket.js'
import useAppSockets from './hooks/useAppSockets.js'
const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
    const { user, status, token, tempID } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchToken());
        dispatch(fetchProductsLocally());
        dispatch(fetchProducts());
        dispatch(fetchCartFromStorage());
        dispatch(fetchOrders());

        socket.connect();
        socket.on('connect', () => {
            console.log('Connected to Socket.IO server');
        })
        socket.on('newOrder', (data) => {
            console.log('New order received from server:', data);
        })
    }, []);


    useEffect(() => {
        if (token) {
            dispatch(currentUser(token));
        }
        else if (token === null) {
            dispatch(setTempID());
        }

    }, [token]);

    useEffect(() => {
        if (user) {
            socket.emit('authenticate', { token })
            dispatch(fetchOrdersbyuserid(user._id));
        }
        

    }, [user]);

    useEffect(() => {
        if (tempID) {
            socket.emit("authenticateGuest", { userId: tempID })
            dispatch(fetchOrdersbyuserid(tempID));
        }

    }, [tempID]);
    useAppSockets();
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
