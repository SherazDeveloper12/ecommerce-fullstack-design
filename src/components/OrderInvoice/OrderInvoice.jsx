import React, { useContext } from 'react'
import { OrderInvoiceContext } from '../../context/Context';
import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux';

export default function OrderInvoice() {
  const { setOrderInvoicePopup } = useContext(OrderInvoiceContext);
  const order = useSelector((state) => state.order.selectedOrder);
  console.log("Selected order in invoice:", order);
  return (
    <div className='absolute top-0 left-0   w-full h-full flex justify-center items-center z-50'>
      <div onClick={() => setOrderInvoicePopup(false)} className='bg-black/70 absolute top-0 left-0 w-full h-full flex justify-center items-center z-1'>
      </div>

      <div className='bg-white p-4 px-16 z-2 rounded-lg w-[80vw] h-[80vh] overflow-auto flex flex-col gap-4  '>
        <div className='flex items-center w-full justify-between mt-8'>
          <div className='flex gap-2 justify-center items-center'>
            <p className='text-neutral-700 font-semibold'>Order ID:</p>
            <p className='text-neutral-500 '>#{order._id}</p>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <p className='text-neutral-700 font-semibold'>Invoice Number:</p>
            <p className='text-neutral-500'>#124515</p>
          </div>
        </div>
        <div className='flex items-center w-full justify-between mt-4'>
          <div className="flex items-center justify-between">
            <img src={logo} alt="Logo" className="h-16 w-16 inline-block mr-2" />
            <h1 className="text-[#8CB7F5] text-5xl font-bold">Brand</h1>
          </div>
          <div>
            <h1 className='text-5xl font-bold font-serif'>INVOICE</h1>
          </div>
        </div>
        <div className='flex items-start justify-between '>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-xl'>Shipping Information</h1>
            <div className='flex flex-col justify-center items-start gap-2'>
              <p ><span className='font-semibold'>Shipping to:</span> {order.shippingAddress.fullName}</p>
              <div className='flex gap-8 justify-start items-center'>
                <p ><span className='font-semibold'>City:</span> {order.shippingAddress.city}</p>
                <p ><span className='font-semibold'>Country:</span> {order.shippingAddress.country}</p>

              </div>
              <p ><span className='font-semibold'>Shipping Address:</span> {order.shippingAddress.addressLine1}</p>

            </div>
            <h1 className='font-bold text-xl'>Billing Information</h1>
            <div className='flex flex-col justify-center items-start gap-2'>
              <p ><span className='font-semibold'>Billing to:</span> {order.billingAddress.fullName}</p>
              <div className=' flex gap-8 justify-start items-center'>
                <p ><span className='font-semibold'>City:</span> {order.billingAddress.city}</p>
                <p ><span className='font-semibold'>Country:</span> {order.billingAddress.country}</p>
              </div>
              <p><span className='font-semibold'>Postal Code:</span> {order.billingAddress.postalZipCode}</p>
              <p ><span className='font-semibold'>Billing Address:</span> {order.billingAddress.addressLine1}</p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-xl'>Contact Details</h1>
            <div className='flex flex-col justify-center items-start gap-2'>
              <p ><span className='font-semibold'>Customer:</span> {order.username}</p>
              <p ><span className='font-semibold'>Email:</span> {order.email}</p>
              <p ><span className='font-semibold'>Phone Number:</span> {order.phoneNumber}</p>
              <p ><span className='font-semibold'>Order ID:</span> {order._id}</p>
            </div>
            <h1 className='font-bold text-xl'>Delivery Details</h1>
            <div className='flex flex-col justify-center items-start gap-2'>
              <p ><span className='font-semibold'>Order Placed At:</span> {new Date(order.createdAt).toLocaleDateString()}</p>
              <p ><span className='font-semibold'>Expected Delivery At:</span>{new Date(new Date(order.createdAt).getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>

            </div>
          </div>
        </div>
         <div className=' border border-gray-300 rounded'>
                <div className='flex justify-between items-center border-b bg-neutral-200 border-gray-200 p-2'>
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
              <div className=' flex justify-end items-center gap-2'>
                <p>Payment Method:</p>
                <p>{order.paymentMethod}</p>
              </div>
              <div className=' flex justify-end items-center gap-2'>
                <p>Payment Method:</p>
                <p>{order.paymentMethod}</p>
              </div>
      </div>
    </div>
  )
}
