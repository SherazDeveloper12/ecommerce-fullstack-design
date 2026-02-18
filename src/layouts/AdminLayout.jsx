import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar/AdminSidebar';
import { Bell, List, User, X } from 'lucide-react';
import Notifcation from '../components/Notifcation/Notifcation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/auth';
import { FetchAllOrders, fetchAllOrdersLocally } from '../store/slices/order';
import { socket } from '../lib/socket';
import { FetchAllConversations, setLiveUsers } from '../store/slices/admin';
import { notificationContext, OrderInvoiceContext } from '../context/Context';
import OrderInvoice from '../components/OrderInvoice/OrderInvoice';
export default function AdminLayout() {
  const { NotifcationVisible, setNotifcationVisible } = useContext(notificationContext);
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  useEffect(() => {
     socket.on('liveUsers', (data) => {
    dispatch(setLiveUsers(data.liveUsers.length - 1));
  });
    dispatch(fetchAllOrdersLocally());
    dispatch(FetchAllOrders())
    dispatch(FetchAllConversations())
    return () => {      socket.off('liveUsers');
    }
  }, []);
  
  const notifications = useSelector((state) => state.notifications.notifications)
 const unreadNotifications = notifications.filter((notification) => !notification.isRead);
  const [OrderInvoicePopup, setOrderInvoicePopup] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(() =>
    window.matchMedia("(min-width: 768px)").matches
  );
 
  return (

    <OrderInvoiceContext.Provider value={{ OrderInvoicePopup, setOrderInvoicePopup, sidebarOpen, setSidebarOpen, setNotifcationVisible }}>
      <div className='flex flex-col relative h-full '>
        {OrderInvoicePopup && <OrderInvoice />}
        <div className='bg-white sticky top-0 z-2 border-b border-gray-300 p-4 flex justify-between items-center  w-full'>
          <h1 className='text-xl md:text-3xl font-bold'>Admin Panel</h1>
          <div className='flex gap-4  justify-center items-center'>
            <div className='relative '>
              <Bell
                onClick={() => { setNotifcationVisible(!NotifcationVisible); setUserMenuVisible(false); }}
                size={18} className='w-8 h-8 text-gray-500  cursor-pointer border border-gray-500 p-1 rounded-full' />
              {unreadNotifications.length > 0 && (
                <span className="absolute -top-2 -right-3 inline-flex items-center justify-center size-6  text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {unreadNotifications.length}
                </span>
              )}
            </div>
            {user.profilePic ? (
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover cursor-pointer border border-gray-300 "
                onClick={() => { setUserMenuVisible(!userMenuVisible); setNotifcationVisible(false); }}
              />
            ) :
              <User
                onClick={() => { setUserMenuVisible(!userMenuVisible); setNotifcationVisible(false); }}
                size={18} className='w-8 h-8 text-gray-500  cursor-pointer border border-gray-500 p-1 rounded-full' />
            }
            <List
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className='md:hidden'
            />
            {NotifcationVisible && <div className='absolute top-14 right-28 md:right-64 bg-white border border-gray-300 rounded shadow-lg w-48 z-50'> <Notifcation /> </div>}
          </div>
          {userMenuVisible &&
            <div
              className='absolute top-16 right-4 bg-white border border-gray-300 rounded shadow-lg w-48 z-50'>
              <ul className='flex flex-col'>
                <li
                  onClick={() => { navigate('admin/profile'); setUserMenuVisible(false); }}
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Profile</li>
                <li
                  onClick={() => dispatch(logout())}
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Logout</li>
              </ul>
            </div>
          }


        </div>

        <div className='flex h-full relative '>
          <div className='hidden md:block w-43   '>
            <AdminSidebar />
          </div>
          <div className='md:hidden fixed w-full z-10'>
            {sidebarOpen && <AdminSidebar />}
          </div>
          <Outlet />

        </div>
      </div>
    </OrderInvoiceContext.Provider>
  )
}


