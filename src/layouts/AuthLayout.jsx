import React from 'react'
import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div className='flex h-screen'>
        <div className='flex-1 flex flex-col gap-4 justify-center items-center bg-blue-400 '> 
            <h1 className='text-white text-4xl font-bold text-shadow-md'>Best Ecommerce Store</h1>
            <p className='text-white text-shadow-2xs'>Get Everything Under One Store</p>
        </div>
        <div className='flex-1 '><Outlet /></div>
        
    </div>
  )
}
