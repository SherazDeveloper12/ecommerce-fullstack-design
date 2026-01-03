import React from 'react'
import { useNavigate } from 'react-router';

export default function ShowcaseGroup(props) {
    const navigate = useNavigate();
    const products =  props?.products.slice(0, 8) 
    const handleproductclick = (product) => {
          navigate(`/products/${product.uid}`);
      }
    return (

        <div className='bg-white shadow-md rounded-lg border border-gray-300  grid grid-cols-6  overflow-hidden'>

            <div className='col-span-2 row-span-2 flex justify-center items-center relative'> 
         <div className='absolute top-1/5  text-white px-10'>
                    <h1 className='text-3xl font-bold text-black' >{props?.title}</h1>
                    <button className='mt-4 cursor-pointer shadow-md bg-white text-black px-6 py-2 font-medium rounded-lg'>Learn More</button>
                </div>
                    <img className='object-full h-64 w-full flex-1 rounded-l-lg' src={`${props?.backgroundImg || interiorbg}`} alt="outdoor-furniture" />
            </div>
            {products.map((product, index) => (
                <div className='flex gap-2 justify-between p-2 border  hover:border-gray-400 hover:scale-102 border-gray-200 bg-white cursor-pointer'
                onClick={()=>handleproductclick(product)}>
                    <div className={`${index}`}>
                        <p className='font-semibold pb-2'>
                            {product.title}
                        </p>
                        <span className='text-gray-400  leading-tight '>
                            <p className=''> From</p>
                            <p>USD {product.price}</p>
                        </span>
                    </div>
                    <div className='size-16 self-end'>
                        <img src={product.img} alt={product.name} className='w-full h-full' />
                    </div>
                </div>
            ))}

        </div>


    )
}
