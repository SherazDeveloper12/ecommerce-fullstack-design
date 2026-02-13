import React from 'react'
import itempicture from '../../assets/Image/interior/3.png'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

export default function RecommendedItems() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.Products);
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Recommended Items</h2>
        <div className='grid grid-col-1 md:grid-cols-5 gap-8'>
            {/* Example recommended items */}
            {products.map((product, index) => (
                <div
                
                onClick={()=>window.location.href = `/products/${product._id}` }
                 key={index} className='bg-white cursor-pointer flex flex-col rounded-lg shadow hover:shadow-lg transition h-80 w-60'>
                <div className='flex-3 flex justify-center items-center '>
                    <img src={product.img[0]} alt={product.heading} className='h-40 w-40' />
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
