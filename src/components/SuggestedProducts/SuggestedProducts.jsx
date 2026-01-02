import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

export default function SuggestedProducts() {
 
 
  const Products = useSelector((state) => state.products.Products)
  const ProductLenght = Products.length;
  const Random = Math.floor(Math.random() * (ProductLenght-4));
   
  const navigate = useNavigate();
  const handleproductclick = (product) => {
          navigate(`/products/${product.uid}`);
      }
  return (
    <div className='bg-white rounded-lg border border-gray-200 shadow-md p-4 flex flex-col gap-4'>
      <h2 className='text-lg font-semibold'>You May Like</h2>
      {Products.slice(Random, Random + 4).map((product) => (
      
        <div key={product.uid} className="p-2 flex gap-4 cursor-pointer" onClick={() => handleproductclick(product)}>
          <div className=" border border-gray-200 rounded-lg  h-24 w-24 overflow-hidden flex items-center justify-center">
            <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className='flex flex-col gap-2 w-44'>
            <h3 className=" font-semibold ">{product.heading}</h3>
            <p className="text-gray-600">${product.price} - ${product.price}</p>
          </div>

        </div>
      ))}
    </div>
  )
}
