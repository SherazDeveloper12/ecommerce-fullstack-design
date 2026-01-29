import React from 'react'
import { useSelector } from 'react-redux'

export default function Checkout() {
    const items = useSelector((state) => state.cart.items)
    
    return (
        <div className='flex flex-col'>
            <div className='text-2xl text-blue-400 font-bold p-4 bg-white border-b pl-18 border-gray-300'>Brand Store</div>
            <div className='h-screen flex'>
                <div className='flex-1 bg-white'>left </div>
                <div className='flex-1 p-8'> 
                    {items.length === 0 ? (
                        <div className='text-center text-gray-500'>Your cart is empty.</div>
                    ) : (
                        <div className='flex flex-col gap-3 pb-3'>
                            <h2 className='text-2xl font-bold mb-4'>Checkout</h2>
                            <ul className='flex flex-col gap-4'>
                                {items.map((item) => (
                                    <li key={item.product._id} className='flex gap-3  '>
                                        <div className='flex-1'>
                                            <img
                                                src={item.product.img[0]}
                                                alt={item.product.title}
                                                className='w-20 h-20 object-cover border border-gray-300 rounded'
                                            />
                                        </div>
                                        <div className='flex-3'>
                                            <div className='font-semibold'>{item.product.heading}</div>
                                        <div>Quantity: {item.quantity}</div>
                                        
                                        </div>
                                        <div className='flex-2'>  {item.product.price} PKR</div>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex items-center gap-4'>
                                <input type='text' placeholder='Apply Coupon' className='border border-gray-300 rounded p-2 flex-3 ' />
                                <button className='bg-blue-500 text-white px-4 py-2 rounded flex-1 cursor-pointer hover:bg-blue-700'>Apply</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
