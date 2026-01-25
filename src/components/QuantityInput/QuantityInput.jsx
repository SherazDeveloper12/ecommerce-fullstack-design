import React, { useState } from 'react'
import useProduct from '../../hooks/useProduct'
import { Minus, Plus } from 'lucide-react';

export default function QuantityInput() {

   const { quantity, setQuantity } = useProduct(); 
    
    return (
        <div className='flex items-center w-full gap-2 px-2 py-1 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'>
           
            <div
            className='cursor-pointer'
            onClick={()=>setQuantity(quantity - 1)}>
            <Minus size={20} className='text-gray-400'  />
            </div>
            <input type="number" inputMode='numberic' min={1}  defaultValue={1} value={quantity} onChange={(e) => setQuantity(e.target.value)}
                className='w-full text-center    py-2 px-4 outline-none moz-appearance:textfield '
            />
            <div className='cursor-pointer ' onClick={()=>setQuantity(quantity + 1)}> 
            <Plus size={20} className='text-gray-400' />
            </div>
        </div>
    )
}
