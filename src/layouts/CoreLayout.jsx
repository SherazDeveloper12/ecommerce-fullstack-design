
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import { toast, Toaster } from 'sonner';
import { useSelector } from 'react-redux';
import { CartContext } from '../context/Context';
import { useEffect, useState } from 'react';
export default function CoreLayout() {
    const [cartIsOpen, setCartIsOpen] = useState(false);
 

useEffect(() => {
    if (cartIsOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    
    return () => {
        document.body.style.overflow = 'unset';
    };
}, [cartIsOpen]);
    const { status, error } = useSelector((state) => state.order);

useEffect(() => {
            if (status === 'succeeded') {
                toast.dismiss();
                toast.success('Order placed successfully!');
            }
            else if (status === 'loading') {
                toast.loading('Placing order...');
            }
            else if (status === 'failed') {
                toast.dismiss();
                toast.error(`${error}`);
            }
        }, [ error]);
    return (
        <CartContext.Provider value={{cartIsOpen, setCartIsOpen}}>
        <div>
            {cartIsOpen && <sidebar className="">
                    <Cart setCartIsOpen={setCartIsOpen} />
                </sidebar>}
            
            <div className={`min-h-screen flex flex-col relative  ${cartIsOpen ? ' max-h-screen overflow-hidden ' : ''}`}>
                
                <header className="w-full sticky top-0 z-50 "><Header /></header>

                <main className="">
                     <Toaster position="top-right" richColors />
                    <Outlet /></main>
                <footer><Footer />
                </footer>
            </div>
        </div>
        </CartContext.Provider>
    );
}