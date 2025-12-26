import React from 'react'
import outdoorChairImg from '../../assets/Image/interior/1.png'
import interiorbg from '../../assets/Image/backgrounds/interiorbg.png'
export default function HomeOutDoorShowcase() {
    return (
    
        <div className='bg-white shadow-md rounded-lg border border-gray-300  grid grid-cols-6 '>

            <div className='col-span-2 row-span-2'>
                <img className='object-fill  rounded-l-lg' src={interiorbg} alt="outdoor-furniture" />
            </div>
            <div className='flex gap-2 justify-between p-2 '>
                <div className=''>
                    <p className='font-semibold pb-2'>Soft Chairs</p>
                    <span className='text-gray-400  leading-tight '>
                        <p className=''> From</p>
                        <p>USD 19</p>
                    </span>
                </div>
                <div className=' self-end'>
                    <img src={outdoorChairImg} alt="outdoor-chair" />
                </div>
            </div>
            <div className='h-32   bg-green-400'></div>
            <div className='h-32    bg-blue-400'></div>
            <div className='h-32    bg-pink-400'></div>
            <div className='h-32    bg-pink-400'></div>
            <div className='h-32  bg-yellow-400 p-2'></div>
            <div className='h-32   bg-green-400'></div>
            <div className='h-32    bg-blue-400'></div>
        </div>
        
        
    )
}
