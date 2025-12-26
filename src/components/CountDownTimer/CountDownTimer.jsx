import React , {useEffect, useState} from 'react'

export default function CountDownTimer() {
   const CountDownTarget = new Date('2025-12-26T23:59:59')
   const getTimeRemaining = (CountDownTarget) => {
    const totaltimeleft = CountDownTarget - new Date();
    const seconds = Math.floor((totaltimeleft / 1000) % 60);
    const minutes = Math.floor((totaltimeleft / 1000 / 60) % 60);
    const hours = Math.floor((totaltimeleft / (1000 * 60 * 60)) % 24);
    const days = Math.floor(totaltimeleft/ (1000*60*60*24));
    return {
        total: totaltimeleft,
        days,
        hours,
        minutes,
        seconds
    }
}

const [timeLeft, setTimeLeft] = useState(getTimeRemaining(CountDownTarget));

useEffect(() => {
    const timer = setInterval(() => {
        const remaining = getTimeRemaining(CountDownTarget);
        setTimeLeft(remaining);
    }, 1000);
    return () => clearInterval(timer);
}, []);
  return (
    <div>
        <h2 className='text-xl '>Deals and offers</h2>

        <p className='mb-4  text-gray-500'>Hygiene equipments</p>
        <div className='flex gap-2 text-center'>
            <div className='flex flex-col shadow-md text-white bg-gray-900 px-3 py-2 rounded-lg'>
                <span className='font-bold text-lg'>{timeLeft.days}</span>
                <span className='text-sm'>Days</span>
            </div>
            <div className='flex flex-col shadow-md text-white bg-gray-900 px-3 py-2 rounded-lg'>
                <span className='font-bold text-lg'>{timeLeft.hours}</span>
                <span className='text-sm'>Hours</span>
            </div>
            <div className='flex flex-col shadow-md text-white bg-gray-900 px-3 py-2 rounded-lg'>
                <span className='font-bold text-lg'>{timeLeft.minutes}</span>
                <span className='text-sm'>Minutes</span>
            </div>
            <div className='flex flex-col shadow-md text-white bg-gray-900 px-3 py-2 rounded-lg'>
                <span className='font-bold text-lg'>{timeLeft.seconds}</span>
                <span className='text-sm'>Seconds</span>
            </div>
        </div>
    </div>
  )
}
