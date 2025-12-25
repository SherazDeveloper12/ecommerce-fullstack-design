import React from 'react'

export default function CountDownTimer() {
   const CountDownTarget = new Date('2024-12-31T23:59:59')
   console.log("countdown target", CountDownTarget)
   console.log("new date", new Date())
   console.log("date parse", Date.parse(CountDownTarget))
   const getTimeRemaining = (CountDownTarget) => {
    const total = Date.parse(CountDownTarget) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
        hours,
        minutes,
        seconds
    };
   }
  return (
    <div>
        <h2 className='text-xl mb-2'>Offer Will end in</h2>
        {/* <p>{CountDownTarget}</p> */}
        <div className='flex gap-2 text-center'>
            <div className='flex flex-col bg-gray-100 px-3 py-2 rounded-lg'>
                <span className='font-bold text-lg'>05</span>
                <span className='text-sm'>Days</span>
            </div>
            <div className='flex flex-col bg-gray-100 px-3 py-2 rounded-lg'>
                <span className='font-bold text-lg'>12</span>
                <span className='text-sm'>Hours</span>
            </div>
            <div className='flex flex-col bg-gray-100 px-3 py-2 rounded-lg'>
                <span className='font-bold text-lg'>30</span>
                <span className='text-sm'>Minutes</span>
            </div>
            <div className='flex flex-col bg-gray-100 px-3 py-2 rounded-lg'>
                <span className='font-bold text-lg'>45</span>
                <span className='text-sm'>Seconds</span>
            </div>
        </div>
    </div>
  )
}
