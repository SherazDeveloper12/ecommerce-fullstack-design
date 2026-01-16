import React from 'react'
import useAdminProductsPage from '../../hooks/useAdminProductsPage';

export default function AdminProducts() {
  const { products ,handledelete, status} = useAdminProductsPage()
  return (
    <div className='p-2 flex flex-col gap-2 w-full'>
      <h2 className='text-2xl text-gray-500 font-semibold '>Products</h2>
      {status === 'loading' ? <div>Loading...</div> :       <div>
         <div className='text-gray-500 font-semibold'>
       Total Products: <span className='text-black font-semibold'>{products.length}</span>
     </div>
      {products && products.length > 0 ? (
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr>
              <th className='border-b p-2'>Images </th>
              <th className='border-b p-2'>Title</th>
              <th className='border-b p-2'>Price</th>
              <th className='border-b p-2'>Category</th>
              <th className='border-b p-2'>Brand</th>
              <th className='border-b p-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} >
                <td className='border-b p-2 flex justify-start items-center gap-2 overflow-x-auto'>
                  {product.img.map((image, index) => (
                  <div key={index} className='w-16 h-16 p-2 border border-gray-400 rounded-md'>
                      <img
                        key={index}
                        src={image}
                        alt={product.title}
                        className=' object-cover w-full h-full rounded-md'
                      />
                  </div>
                  ))
                  }
                </td>
                <td className='border-b p-2'>{product.title}</td>
                <td className='border-b p-2'>${product.price}</td>
                <td className='border-b p-2'>{product.category}</td>
                <td className='border-b p-2'>{product.brand}</td>
                <td className='border-b p-2'>
                  <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2 cursor-pointer'>Edit</button>
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
