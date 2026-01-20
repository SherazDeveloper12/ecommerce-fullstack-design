import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

export default function RelatedProducts({ category }) {
    const Products = useSelector((state) => state.products.Products)
    const DisplayProducts  = Products.filter(product => product.category === category );
  const navigate = useNavigate();
  const handleproductclick = (product) => {
          navigate(`/products/${product._id}`);
      }
  return (
    <div className='bg-white rounded-lg border border-gray-200 shadow-md p-4 flex flex-col gap-4'>
        <h2 className='text-lg font-semibold'>Related Products</h2>
        <div className='flex gap-4'>
              {DisplayProducts.slice(0, 6).map((product) => (
      
        <div key={product.uid} className="flex flex-col gap-4 cursor-pointer" onClick={() => handleproductclick(product)}>
          <div className=" border border-gray-200 rounded-lg  size-46 overflow-hidden flex items-center justify-center brightness-95">
            <img src={product.img[0]} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className='flex flex-col gap-2 w-44'>
            <h3 className=" font-semibold ">{product.heading}</h3>
            <p className="text-gray-400 font-semibold">${product.price} - ${product.price}</p>
          </div>

        </div>
      ))}
        </div>
    </div>
  )
}
