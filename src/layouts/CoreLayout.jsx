
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import { CartContext } from '../context/CartContext';
import { useState } from 'react';
export default function CoreLayout() {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    return (
        <CartContext.Provider value={{cartIsOpen, setCartIsOpen}}>
        <div>
            {cartIsOpen && <sidebar className="">
                    <Cart setCartIsOpen={setCartIsOpen} />
                </sidebar>}
            
            <div className=' min-h-screen flex flex-col relative '>
                
                <header className="w-full sticky top-0 z-50"><Header /></header>

                <main className=""><Outlet /></main>
                <footer><Footer />
                </footer>
            </div>
        </div>
        </CartContext.Provider>
    );
}