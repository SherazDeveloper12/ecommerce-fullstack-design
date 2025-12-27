import React from 'react'

export default function NewsLetterSubscription() {
  return (
    <div className='bg-[#eff2f4] flex flex-col items-center justify-center gap-4 py-10'>
        <h1 className='font-bold text-3xl'>Subscribe on our newsletter</h1>
        <p className='text-gray-700'>Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className='flex gap-2'>
            <input type="email" placeholder='Enter your email address' className='bg-white py-2 px-8 rounded-md border border-gray-300 focus:outline-none'/>
        <button className='bg-blue-600 text-white py-2 px-6 rounded-md'>Subscribe</button>
        </div>
        
    </div>
  )
}
