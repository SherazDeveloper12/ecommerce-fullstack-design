import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar/AdminSidebar';
import { Bell, User } from 'lucide-react';
import Notifcation from '../components/Notifcation/Notifcation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/auth';
export default function AdminLayout() {
  const [NotifcationVisible, setNotifcationVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const {user} = useSelector((state) => state.auth);
  const navigate =  useNavigate();
  const dispatch =  useDispatch();
  return (
    <div className='flex flex-col h-screen'>
        <div className='bg-white border-b border-gray-300 p-4 flex justify-between items-center'>
            <h1 className='text-3xl font-bold'>Admin Panel</h1>
            <div className='flex gap-4'>
          <Bell 
          onClick={()=>{setNotifcationVisible(!NotifcationVisible)}}
          size={18} className='w-8 h-8 text-gray-500  cursor-pointer border border-gray-500 p-1 rounded-full' />
           {user.profilePic ? (
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover cursor-pointer border border-gray-300 "
              onClick={()=>{setUserMenuVisible(!userMenuVisible)}}
            />
          ) :
          <User 
          onClick={()=>{setUserMenuVisible(!userMenuVisible)}}
          size={18} className='w-8 h-8 text-gray-500  cursor-pointer border border-gray-500 p-1 rounded-full' />
          }
            </div>
            {userMenuVisible && 
            <div
            className='absolute top-16 right-4 bg-white border border-gray-300 rounded shadow-lg w-48 z-50'>
                <ul className='flex flex-col'>
                    <li
                    onClick={() => {navigate('admin/profile'); setUserMenuVisible(false);}}
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Profile</li>
                    <li
                    onClick={()=>dispatch(logout())}
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Logout</li>
                </ul>
            </div>
            }
        {NotifcationVisible && <Notifcation />}
        </div>
        <div className='flex h-full'>
            <AdminSidebar  />
            
               <Outlet />
            
        </div>
    </div>
  )
}


