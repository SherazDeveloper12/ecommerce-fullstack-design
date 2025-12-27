import React from 'react'
import { extraServices } from '../../lib/constant'
import image from '../../assets/extraservice1.png'
import icon from '../../assets/icon1.png'
export default function ExtraServices() {
  return (
    <div className='flex gap-3 flex-col'>
      <h2 className='text-2xl font-bold '>Extra Services</h2>
      <div className='grid grid-cols-4 gap-2 '>
        {extraServices.map((service, index) => (
          <div className='bg-white flex flex-col rounded-lg overflow-hidden shadow-lg border border-gray-300' id={index}>
            <div className='flex-2 flex flex-col w-full relative ' >
              <img src={service.img} alt={service.title} className='h-full w-full object-cover' />
              <div className='bg-blue-200 h-10 w-10 rounded-full flex items-center justify-center border border-white absolute -bottom-4.5 right-10'>
                <img src={service.icon} alt={`${service.title} icon`} className='rounded-full' />
              </div>
            </div>
            <div className='flex-1 font-semibold py-2 pl-2 pr-23'>

              {service.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
