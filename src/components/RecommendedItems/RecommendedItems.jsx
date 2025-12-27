import React from 'react'
import itempicture from '../../assets/Image/interior/3.png'
import { products } from '../../lib/constant'

export default function RecommendedItems() {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Recommended Items</h2>
        <div className='grid grid-cols-5 gap-8'>
            {/* Example recommended items */}
            {products.map((product, index) => (
                <div className='bg-white flex flex-col rounded-lg shadow hover:shadow-lg transition h-80 w-60'>
                <div className='flex-3 flex justify-center items-center '>
                    <img src={product.img} alt={product.name} className='h-40 w-40' />
                </div>
                <div className='flex-1 flex flex-col py-2 px-4'>
                    <h3 className='font-semibold mb-2'>${product.price}</h3>
                <p className='text-gray-600'>{product.title}</p>
                </div>
              </div> 
            ))}
            
        </div>

    </div>
  )
}
