import React from 'react'
import useAdminProductsPage from '../../hooks/useAdminProductsPage';

export default function AdminProducts() {
  const { products ,handledelete, status,handleedit } = useAdminProductsPage()
  
  return (
    <div className='p-4 flex flex-col gap-2 w-full'>
      <div className='flex justify-between items-center'>
         <h2 className='text-xl font-semibold text-neutral-400'>Products</h2>
       <div className='text-neutral-400 '>
       Total Products: <span className='text-neutral-400 '>{products.length}</span>
     </div>
      </div>
           
      {status === 'loading' ? <div>Loading...</div> :       <div>
        
      {products && products.length > 0 ? (
        <table className='w-full text-left border-collapse rounded-xl overflow-hidden'>
          <thead>
            <tr className='bg-neutral-200'>
              <th className='border-b p-2'>Images </th>
              <th className='border-b p-2'>Title</th>
              <th className='hidden md:table-cell border-b p-2'>Stock</th>
              <th className='hidden md:table-cell border-b p-2'>Price</th>
              <th className='hidden md:table-cell border-b p-2'>Category</th>
              <th className='hidden md:table-cell border-b p-2'>Brand</th>
              <th className='border-b p-2'>Actions</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {products.map((product) => (
              <tr key={product._id} >
                <td className='border-b px-1 py-2 '>
                  <div className='flex justify-start items-center flex-wrap  md:gap-2 overflow-x-auto'>
                  {product.img.map((image, index) => (
                  <div key={index} className='size-10 md:size-16 p-2 border border-gray-400 rounded-md'>
                      <img
                        key={index}
                        src={image}
                        alt={product.title}
                        className=' object-cover w-full h-full rounded-md'
                      />
                  </div>
                  ))
                  }
                  </div>
                </td>
                <td className='border-b p-2'>{product.title}</td>
                <td className='hidden md:table-cell border-b p-2'>{product.quantity}</td>
                <td className='hidden md:table-cell border-b p-2'>${product.price}</td>
                <td className='hidden md:table-cell border-b p-2'>{product.category}</td>
                <td className='hidden md:table-cell border-b p-2'>{product.brand}</td>
                <td className='border-b p-2'>
                  <button 
                  className='bg-blue-500 text-white px-2 py-1 rounded mr-2 cursor-pointer'
                  onClick={()=>handleedit(product._id)}
                  >Edit</button>
                  <button
                  onClick={()=>handledelete(product._id)}
                  className='bg-red-500 text-white px-2 py-1 rounded cursor-pointer'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products available.</p>
      )}
      </div>
}
    

    </div>
  )
}
