import { AnimatePresence, motion } from 'motion/react';
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { X } from 'lucide-react';


export default function Cart() {
  const { cartIsOpen, setCartIsOpen } = useContext(CartContext);
  return (
    <div className='fixed right-0 top-0 h-screen w-full z-400'>
      <div
        onClick={() => {
          setCartIsOpen(false)
        }}
        className=' bg-black/75 h-screen w-full z-4002'></div>
      <AnimatePresence>
        {cartIsOpen &&

          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.3 }
            }
            className='bg-white p-4 fixed right-0 top-0 h-screen w-80 shadow-lg flex flex-col'>
            <div className='flex justify-between items-center '>
              <h2 className='text-2xl font-bold '>Your Cart</h2>
              <X size={20} onClick={() => setCartIsOpen(false)} className=' cursor-pointer' />
            </div>
            <div className='flex flex-col justify-center items-center h-full gap-2'>
             <p className='text-gray-500'>Your cart is currently empty.</p>
             <button onClick={() => setCartIsOpen(false)}
              className='cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Start Shopping</button>
            </div>
           
          </motion.div>
        }
      </AnimatePresence>
    </div>)
}
