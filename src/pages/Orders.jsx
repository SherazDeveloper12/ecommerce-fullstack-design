import React from 'react'
import { useSelector } from 'react-redux';

export default function Orders() {
  const { orders, status, error } = useSelector((state) => state.order);
const reversedOrders = orders.toReversed();
  return (
    <div className='min-h-screen p-4 px-12 flex flex-col'>
      {orders.length === 0 ? (
        <div className='flex flex-col justify-center items-center h-[70vh] gap-4'>
          <p className='text-2xl text-gray-500'>No orders found yet. Continue shopping to place your first order.</p>
          <button className='ml-4 py-2 px-4 bg-blue-500 cursor-pointer font-semibold text-white rounded' onClick={() => window.location.href = '/'}>Shop Now</button>
        </div>
      ) : (


        <div>
          {reversedOrders.map((order) => (
            <div key={order._id} className="bg-white shadow-md rounded p-4 mb-4 flex flex-col gap-4">

              <div className='flex justify-between font-semibold '>
                <p className='text-gray-500'>#{order._id}</p>
                <span className='py-1 px-4 border border-green-400 bg-green-300 rounded-2xl'>Status:     {order.status}</span>
              </div>
              <div className='flex justify-between'>
                <div className='flex flex-col justify-between font-semibold '>
                  <p>Order By</p>

                  <p className='text-gray-500'>{order.shippingAddress.fullName}</p>
                  <p className='text-gray-500'>{order.shippingAddress.addressLine1}</p>
                  <p className='text-gray-500'>{order.shippingAddress.city}</p>
                </div>
                <div className='flex flex-col justify-start font-semibold '>
                  <p className=''>Order Placed At:</p>
                 
                   <p className='text-gray-500'>{new Date(order.createdAt).toLocaleDateString()}</p>
                  <p className=''>Expected Delivery:</p>
                  <p className='text-gray-500'>{order.expectedDelivery ? new Date(order.expectedDelivery).toLocaleDateString() : 'In 2 to 3 days'}</p>
                </div>
              </div>



              <div className=' border border-gray-300 rounded'>
                <div className='flex justify-between items-center border-b border-gray-200 p-2'>
                  <div className="flex items-center gap-4">
                    <h3 className="font-bold mb-2 w-16 text-center">Image</h3>
                    <h3 className="font-bold mb-2">Product Details</h3>

                  </div>
                  <h3 className="font-bold mb-2">Price</h3>


                </div>
                <div className='p-2'>
                  {order.items.map((item) => (
                    <div key={item.product._id} className="flex justify-between items-center ">
                      <div className="flex items-center gap-4">
                        <img src={item.product.img[0]} alt={item.product.title} className="w-16 h-16 object-cover rounded" />
                        <div>
                          <p className="font-medium">{item.product.title}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-semibold">${item.product.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-col gap-2 '>
                <div className=' flex justify-between text-gray-500 mt-2'>
                  <p>Payment Method: </p>
                  <p>{order.paymentMethod}</p>
                </div>
               
                <div className=' flex justify-between text-gray-500 mt-2'>
                  <p>Total Items Cost: </p>
                  <p>{order.items.reduce((total, item) => total + item.product.price * item.quantity, 0)}</p>
                </div>
               
                <div className=' flex justify-between text-gray-500 mt-2'>
                  <p>Delivery Charges: </p>
                  <p>${order.deliveryCharges}</p>
                </div>
                <div className='font-semibold flex justify-between border-t border-gray-300 mt-2'>
                  <p>Total Amount: </p>
                  <p>${order.payableAmount}</p>
                </div>
              </div>

            </div>
          ))}

        </div>
      )}
      {status === 'loading' && <div>Loading orders...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
    </div>
  )
}
