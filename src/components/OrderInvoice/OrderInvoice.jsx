import React, { useContext } from 'react'
import { OrderInvoiceContext } from '../../context/Context';

export default function OrderInvoice() {
  const {setOrderInvoicePopup} = useContext(OrderInvoiceContext);
  return (
    <div className='absolute top-0 left-0   w-full h-full flex justify-center items-center z-50'>
    <div onClick={() => setOrderInvoicePopup(false)} className='bg-black/70 absolute top-0 left-0 w-full h-full flex justify-center items-center z-1'>
       
    </div>
     <div className='bg-white p-4 z-2 rounded-lg w-[80vw] h-[80vh] overflow-auto'>
            <h2 className='text-xl font-semibold mb-4'>Order Invoice</h2>
            <p className='mb-2'><span className='font-semibold'>Order ID:</span> 123456789</p>
            <p className='mb-2'><span className='font-semibold'>Customer Name:</span> John Doe</p>
            <p className='mb-2'><span className='font-semibold'>Email:</span> john.doe@example.com</p>
        </div>
    </div>
  )
}
