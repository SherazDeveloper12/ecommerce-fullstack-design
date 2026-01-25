
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import useCart from '../hooks/useCart';
export default function CoreLayout() {
    const {isOpen} = useCart();
    return (
        <div>
            {isOpen && <sidebar className="">
                    <Cart />
                </sidebar>}
            
            <div className=' min-h-screen flex flex-col relative '>
                
                <header className="w-full sticky top-0 z-50"><Header /></header>

                <main className=""><Outlet /></main>
                <footer><Footer />
                </footer>
            </div>
        </div>
    );
}