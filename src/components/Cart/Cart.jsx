import React from 'react'
import useCart from '../../hooks/useCart';

export default function Cart() {
    const {setIsOpen} = useCart();
  return (
    <div className='fixed right-0 top-0 h-screen w-full z-400'>
    <div 
    onClick={() => {
    
      setIsOpen(false);
    }}
    className=' bg-black/75 h-screen w-full z-4002'></div>
    <div className='bg-white p-4 fixed right-0 top-0 h-screen w-80 shadow-lg  '>Cart</div>
  </div>)
}
