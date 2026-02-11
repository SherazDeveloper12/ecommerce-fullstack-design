import React, { useContext, useState } from 'react'
import { OrderInvoiceContext } from '../../context/Context';
import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux';
import { Clipboard, ClipboardCheck, X } from 'lucide-react';
import { motion } from 'framer-motion';
import InvoicePdf from '../InvoicePDF/InvoicePdf';
import { useNavigate } from 'react-router';
export default function OrderInvoice() {
  const navigate = useNavigate();
  const { setOrderInvoicePopup } = useContext(OrderInvoiceContext);
  const order = useSelector((state) => state.order.selectedOrder);
  const [shippingInfoCopied, setShippingInfoCopied] = useState(false);
  const [billingInfoCopied, setBillingInfoCopied] = useState(false);
  const [contactInfoCopied, setContactInfoCopied] = useState(false);
  const [deliveryInfoCopied, setDeliveryInfoCopied] = useState(false);
  const shippingInformation =
    `Shipping Information:
Shipping to: ${order.shippingAddress.fullName}
City: ${order.shippingAddress.city}
Country: ${order.shippingAddress.country}
Postal Code: ${order.shippingAddress.postalZipCode}
Shipping Address: ${order.shippingAddress.addressLine1}`;
  const billingInformation =
    `Billing Information:
Billing to: ${order.billingAddress.fullName}
City: ${order.billingAddress.city}
Country: ${order.billingAddress.country}
Postal Code: ${order.billingAddress.postalZipCode}
Billing Address: ${order.billingAddress.addressLine1}`;
  const contactInformation =
    `Contact Information:
Customer: ${order.username}
Email: ${order.email}
Phone Number: ${order.phoneNumber}
Order ID: #${order._id}`;
  const deliveryInformation =
    `Delivery Information:
Order Placed At: ${new Date(order.createdAt).toLocaleDateString()}
Expected Delivery At: ${new Date(new Date(order.createdAt).getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}`;

  return (
    <div className='absolute top-0 left-0   w-full h-full flex justify-center items-center z-50'>
      <div onClick={() => setOrderInvoicePopup(false)} className='bg-black/70 absolute top-0 left-0 w-full h-full flex justify-center items-center -z-1'>
      </div>

      <div className='bg-white p-4 px-16 z-2 pt-14 pb-14 rounded-lg w-[80vw]   flex flex-col gap-4  '>
        <div className='flex justify-end items-center flex-wrap gap-2'>
          <button
            onClick={() => navigate(`/admin/orders/${order._id}/invoice`)}
            className='bg-blue-400 p-1 px-3 rounded-full text-white font-bold text-xl hover:bg-blue-600 transition-colors duration-300 cursor-pointer mr-4'
          >
            Generate PDF
          </button>
          <button
            className='bg-green-400 p-1 px-3 rounded-full text-white font-bold text-xl hover:bg-green-600 transition-colors duration-300 cursor-pointer mr-4'
          >
            Mark as Out for Delivery
          </button>
          <button
            className='bg-amber-400 p-1 px-3 rounded-full text-white font-bold text-xl hover:bg-yellow-600 transition-colors duration-300 cursor-pointer mr-4'
          >
            Chat with Customer
          </button>
          <button
            className='bg-red-500 p-1 px-3 rounded-full text-white font-bold text-xl hover:bg-red-600 transition-colors duration-300 cursor-pointer'
            onClick={() => setOrderInvoicePopup(false)}>
            X
          </button>
        </div>
        <div className='flex items-center w-full justify-between flex-wrap gap-4'>
          <div className='flex gap-2 justify-center items-center'>
            <p className='text-neutral-700 font-semibold'>Order ID:</p>
            <p className='text-neutral-500 '>#{order._id}</p>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <p className='text-neutral-700 font-semibold'>Invoice Number:</p>
            <p className='text-neutral-500'>#124515</p>
          </div>
        </div>
        <div className='flex items-center w-full justify-between flex-wrap gap-4'>
          <div className="flex items-center justify-between">
            <img src={logo} alt="Logo" className="h-16 w-16 inline-block mr-2" />
            <h1 className="text-[#8CB7F5] text-5xl font-bold">Brand</h1>
          </div>
          <div>
            <h1 className='text-5xl font-bold font-serif'>INVOICE</h1>
          </div>
        </div>
        <div className='flex items-start justify-between  '>
          <div className='flex flex-col gap-3'>
            <div className='flex justify-start items-center gap-2'>
              <h1 className='font-bold text-xl'>Shipping Information</h1>
              <motion.div
                whileHover={{ backgroundColor: "#E5E5E5" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  if (!shippingInfoCopied) {
                    navigator.clipboard.writeText(shippingInformation);
                    setShippingInfoCopied(true);
                    setTimeout(() => setShippingInfoCopied(false), 2000);
                  }
                }
                }
                className='flex justify-center items-center bg-neutral-100 px-2 rounded-lg '
              >
                {shippingInfoCopied ?
                  <div className='flex justify-center items-center'>
                    <ClipboardCheck className='cursor-pointer text-green-500' size={20} />
                    <p className='text-green-500'>Copied!</p>
                  </div>
                  :
                  <div

                    className='flex justify-center items-center cursor-pointer'>
                    <Clipboard className='cursor-pointer text-neutral-600' size={20}
                    />
                    <p className='text-neutral-600'>Copy</p>
                  </div>}
              </motion.div>
            </div>
            <div className='flex flex-col justify-center items-start gap-2'>
              <p ><span className='font-semibold'>Shipping to:</span> {order.shippingAddress.fullName}</p>
              <div className='flex gap-8 justify-start items-center'>
                <p ><span className='font-semibold'>City:</span> {order.shippingAddress.city}</p>
                <p ><span className='font-semibold'>Country:</span> {order.shippingAddress.country}</p>

              </div>
              <p><span className='font-semibold'>Postal Code:</span> {order.shippingAddress.postalZipCode}</p>
              <p ><span className='font-semibold'>Shipping Address:</span> {order.shippingAddress.addressLine1}</p>

            </div>

            <div className='flex justify-start items-center gap-2'>
              <h1 className='font-bold text-xl'>Billing Information</h1>
              <motion.div
                whileHover={{ backgroundColor: "#E5E5E5" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  if (!billingInfoCopied) {
                    navigator.clipboard.writeText(billingInformation);
                    setBillingInfoCopied(true);
                    setTimeout(() => setBillingInfoCopied(false), 2000);
                  }
                }}
                className='flex justify-center items-center bg-neutral-100 px-2 rounded-lg '
              >
                {billingInfoCopied ?
                  <div className='flex justify-center items-center'>
                    <ClipboardCheck className='cursor-pointer text-green-500' size={20} />
                    <p className='text-green-500'>Copied!</p>
                  </div>
                  :
                  <div

                    className='flex justify-center items-center cursor-pointer'>
                    <Clipboard className='cursor-pointer text-neutral-600' size={20}
                    />
                    <p className='text-neutral-600'>Copy</p>
                  </div>}
              </motion.div>
            </div>
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

            <div className='flex justify-start items-center gap-2'>
              <h1 className='font-bold text-xl'>Contact Details:</h1>
              <motion.div
                whileHover={{ backgroundColor: "#E5E5E5" }}
                whileTap={{ scale: 0.9 }}
                // conditionally disable the copy functionality if contact info is already copied to prevent multiple clicks while the "Copied!" message is shown 

                onClick={() => {
                  if (!contactInfoCopied) {
                    navigator.clipboard.writeText(contactInformation);
                    setContactInfoCopied(true);
                    setTimeout(() => setContactInfoCopied(false), 2000);
                  }
                }
                }
                className='flex justify-center items-center bg-neutral-100 px-2 rounded-lg '
              >
                {contactInfoCopied ?
                  <div className='flex justify-center items-center'>
                    <ClipboardCheck className='cursor-pointer text-green-500' size={20} />
                    <p className='text-green-500'>Copied!</p>
                  </div>
                  :
                  <div

                    className='flex justify-center items-center cursor-pointer'>
                    <Clipboard className='cursor-pointer text-neutral-600' size={20}
                    />
                    <p className='text-neutral-600'>Copy</p>
                  </div>}
              </motion.div>
            </div>
            <div className='flex flex-col justify-center items-start gap-2'>
              <p ><span className='font-semibold'>Customer:</span> {order.username}</p>
              <p ><span className='font-semibold'>Email:</span> {order.email}</p>
              <p ><span className='font-semibold'>Phone Number:</span> {order.phoneNumber}</p>
              <p ><span className='font-semibold'>Order ID:</span> #{order._id}</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
              <h1 className='font-bold text-xl'>Delivery Details:</h1>
              <motion.div
                whileHover={{ backgroundColor: "#E5E5E5" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  if (!deliveryInfoCopied) {
                    navigator.clipboard.writeText(deliveryInformation);
                    setDeliveryInfoCopied(true);
                    setTimeout(() => setDeliveryInfoCopied(false), 2000);
                  }
                }
                }
                className='flex justify-center items-center bg-neutral-100 px-2 rounded-lg '
              >
                {deliveryInfoCopied ?
                  <div className='flex justify-center items-center'>
                    <ClipboardCheck className='cursor-pointer text-green-500' size={20} />
                    <p className='text-green-500'>Copied!</p>
                  </div>
                  :
                  <div

                    className='flex justify-center items-center cursor-pointer'>
                    <Clipboard className='cursor-pointer text-neutral-600' size={20}
                    />
                    <p className='text-neutral-600'>Copy</p>
                  </div>}
              </motion.div>
            </div>
            <div className='flex flex-col justify-center items-start gap-2'>
              <p ><span className='font-semibold'>Order Placed At:</span> {new Date(order.createdAt).toLocaleDateString()}</p>
              <p ><span className='font-semibold'>Expected Delivery At:</span> {new Date(new Date(order.createdAt).getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>

            </div>
          </div>
        </div>
        <div className=' border border-gray-300 rounded-md overflow-hidden'>
          <div className='flex justify-between items-center border-b bg-neutral-800 text-white border-gray-200 p-2'>
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
        <div className='pr-2'>
          <div className=' flex justify-end items-center gap-8 '>
            <p className='font-semibold'>Subtotal:</p>
            <p>${order.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}</p>
          </div>
          <div className=' flex justify-end items-center gap-8 '>
            <div className=' flex justify-end items-center gap-8 border-b border-neutral-500 '>
              <p className='font-semibold'>Delivery Charges:</p>
              <p>${order.deliveryCharges}</p>
            </div>
          </div>
          <div className=' flex justify-end items-center gap-8'>
            <p className='font-semibold'>Total:</p>
            <p className='font-semibold'>${order.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0) + order.deliveryCharges}</p>
          </div>
        </div>
        <div className='font-semibold bg-neutral-700 mt-22 p-2'>
          <p className='text-center text-white'>Thank You for your business!</p>
        </div>
      </div>

    </div>
  )
}
