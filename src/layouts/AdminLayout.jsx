import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar/AdminSidebar';
export default function AdminLayout() {
  return (
    <div className='flex flex-col h-screen'>
        <div className='bg-red-400'>Admin Header</div>
        <div className='flex h-full'>
            <AdminSidebar  />
            
               <Outlet />
            
        </div>
    </div>
  )
}


