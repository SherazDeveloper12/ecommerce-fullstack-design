import React from 'react'
import mobile from '../assets/11.png'
import { Star, Circle, Heart } from 'lucide-react'
import { products } from '../lib/constant'
export default function Products() {

    return (
        <div className='flex max-w-7xl mx-auto gap-4 pt-4'>
            <div className='bg-blue-400 flex-1'>Filters</div>
            <div className='flex-4 flex flex-col gap-4 overflow-y-auto '>
                {products.map((product, index) => (
                    <div className='flex gap-4 bg-white rounded-lg border border-gray-300 shadow-md' id={index}>
                    <div className='flex-1 flex justify-center items-center'>
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className='flex-3 flex flex-col gap-3 p-4 relative'>
                        <h1>{product.heading}</h1>
                        <div>
                        <div className='flex gap-4'>
                            <p className='font-semibold'>${product.price}.00</p>
                            <p className='text-gray-500 line-through'>$1128.00</p>
                        </div>
                        <div className='flex gap-2'>
                            <span className='flex '>
                               {Array.from({ length: product.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                      fill='orange'
                                        stroke='0'
                                    />
                                ))}
                                {Array.from({ length: 5 - product.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                      fill='#dee2e7'
                                        stroke='0'
                                    />
                                ))}
                            </span>
                            <span className='text-[#dee2e7] flex gap-2 justify-center items-center'>
                                <Circle fill='#dee2e7' stroke='0' size={10} />
                                <p className='font-semibold text-gray-400'>{product.orders} Orders</p>
                                <Circle fill='#dee2e7' stroke='0' size={10} />
                            </span>
                            {product.freeShipping ? <p className='font-semibold text-green-400'>Free Shipping</p> : ''}
                        </div>
                        </div>
                        <div>
                            <p className='text-gray-400 pr-32'>{product.description}</p>
                        </div>
                        <a href="#" className='text-blue-400 font-semibold'>View Details</a>
                        <div className='flex justify-center items-center rounded-lg border border-blue-600 p-2 absolute top-4 right-4 cursor-pointer'>
                            <Heart color='blue' />
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}
