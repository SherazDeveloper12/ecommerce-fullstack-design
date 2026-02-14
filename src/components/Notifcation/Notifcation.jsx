import { Type } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { markAsRead, MarkNotificationsAsRead } from '../../store/slices/notifications';
import { useNavigate } from 'react-router';
import { notificationContext, OrderInvoiceContext } from '../../context/Context';

export default function Notifcation() {
     const {notifications} = useSelector((state) => state.notifications);
    const unreadNotifications = useSelector((state) => state.notifications.notifications.filter(notification => !notification.isRead));
  const userrole = useSelector((state) => state.auth.user?.role);
 const {setNotifcationVisible} = useContext(notificationContext);
    const dispatch = useDispatch();
  const navigate = useNavigate();
 useEffect(()=>{
  
    return ()=>{
        dispatch(MarkNotificationsAsRead(unreadNotifications));
      unreadNotifications.forEach(notification => {
        dispatch(markAsRead(notification._id));
      });
    }
 },[])

  return (
    <div className='absolute  bg-white border border-gray-300 rounded shadow p-4 w-65 md:w-90 '>
        <h2 className='text-lg font-semibold mb-2'>Notifications</h2>
         {
            notifications.length === 0 && <div className='bg-gray-100 p-2'>You have no notifications yet.</div>
          }
        <ul className='max-h-[66vh] overflow-y-scroll'>
         
            {notifications.map((notification) => (
              <>
                <li
                onClick={()=>{
                   {userrole && setNotifcationVisible(false)};
                  navigate(`${userrole === 'admin' ? '/admin/orders' : '/orders'}`)
                }}
                key={notification._id} 
                className={`p-2 cursor-pointer  rounded ${notification.isRead ? 'bg-gray-100' : 'bg-blue-100 font-bold'}`}>
                    {notification.message}
                    <div className={`text-neutral-500 text-right text-xs p-2 cursor-pointer mb-2 rounded ${notification.isRead ? 'bg-gray-100' : 'bg-blue-100 font-bold'}`}>
                      { (() => {
    const hoursAgo = Math.floor((Date.now() - new Date(notification.createdAt).getTime()) / (1000 * 60 * 60));
    
    if (hoursAgo < 1) {
      const minutesAgo = Math.floor((Date.now() - new Date(notification.createdAt).getTime()) / (1000 * 60));
      return `${minutesAgo} minutes ago`;
    } else if (hoursAgo < 24) {
      return `${hoursAgo} hours ago`;
    } else {
      const daysAgo = Math.floor(hoursAgo / 24);
      return `${daysAgo} days ago`;
    }
  })()} 
                    </div>
                </li>
             
             </>
            ))}
        </ul>
    </div>
  )
}
