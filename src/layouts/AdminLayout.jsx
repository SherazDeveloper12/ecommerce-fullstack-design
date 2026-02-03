import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar/AdminSidebar';
import { Bell } from 'lucide-react';
import Notifcation from '../components/Notifcation/Notifcation';
export default function AdminLayout() {
  const [NotifcationVisible, setNotifcationVisible] = useState(false);
  return (
    <div className='flex flex-col h-screen'>
        <div className='bg-white border-b border-gray-400 p-4 flex justify-between items-center'>
            <h1 className='text-3xl font-bold'>Admin Panel</h1>
            <div>
          <Bell 
          onClick={()=>{setNotifcationVisible(!NotifcationVisible)}}
          size={24} className='w-10 h-10 text-gray-500  cursor-pointer border border-gray-500 p-1 rounded-full' />
            </div>
        {NotifcationVisible && <Notifcation />}
        </div>
        <div className='flex h-full'>
            <AdminSidebar  />
            
               <Outlet />
            
        </div>
    </div>
  )
}


