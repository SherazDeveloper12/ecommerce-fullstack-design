
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import { toast, Toaster } from 'sonner';
import { useSelector } from 'react-redux';
import { CartContext } from '../context/Context';
import { useEffect, useState } from 'react';
import { MessageCircleMore, MessageSquareMore, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { socket } from '../lib/socket';
import Chat from '../components/Chat/Chat';
export default function CoreLayout() {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [chatIsOpen, setChatIsOpen] = useState(false);
    const [chatwithusdivIsVisible, setChatwithusdivIsVisible] = useState(true);
    setInterval(() => {
        setChatwithusdivIsVisible(false);
    }, 5000);
    useEffect(() => {
        
    }, [])
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
    }, [error]);
    return (
        <CartContext.Provider value={{ cartIsOpen, setCartIsOpen }}>
            <div>
                {cartIsOpen && <div className="">
                    <Cart setCartIsOpen={setCartIsOpen} />
                </div>}

                <div className={`min-h-screen flex flex-col relative  ${cartIsOpen ? ' max-h-screen overflow-hidden ' : ''}`}>

                    <header className="w-full sticky top-0 z-50 "><Header /></header>

                    {
                        !chatIsOpen &&
                        <motion.div
                            initial={{ translateX: 100 }}
                            animate={{ translateX: 0 }}

                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut'
                            }}
                            className='fixed bottom-4 right-4  bg-blue-500 rounded-full p-2 shadow-lg cursor-pointer z-10 hover:transform hover:scale-120 duration-200' onClick={() => setChatIsOpen(true)} whileHover={{ scale: 1.1 }}>
                            <MessageSquareMore className='text-white ' size={24} />

                        </motion.div>
                    }
                    <AnimatePresence>
                        {
                            !chatIsOpen && chatwithusdivIsVisible &&
                            <motion.div
                                initial={{ translateX: 150 }}
                                animate={{ translateX: 0 }}
                                exit={{ translateX: 150 }}
                                transition={{
                                    duration: 0.7,
                                    ease: 'easeInOut'
                                }}
                                className='fixed bottom-4 right-16 z-9 bg-white rounded shadow-md text-black font-sans font-semibold p-2' onClick={() => setChatIsOpen(true)} whileHover={{ scale: 1.1 }}>
                                chat with us

                            </motion.div>
                        }
                    </AnimatePresence>
                    {chatIsOpen && <Chat setChatIsOpen={setChatIsOpen} />}
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