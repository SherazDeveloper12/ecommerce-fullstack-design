import { Type } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { markAsRead, MarkNotificationsAsRead } from '../../store/slices/notifications';

export default function Notifcation() {
     const {notifications} = useSelector((state) => state.notifications);
  const unreadNotifications = notifications.filter(notification => !notification.read);
  const dispatch = useDispatch();
 useEffect(()=>{
  
    return ()=>{
        dispatch(MarkNotificationsAsRead(unreadNotifications));
      unreadNotifications.forEach(notification => {
        dispatch(markAsRead(notification._id));
      });
    }
 },[])

  return (
    <div className='absolute top-14 right-18 bg-white border border-gray-300 rounded shadow p-4 w-90 '>
        <h2 className='text-lg font-semibold mb-2'>Notifications</h2>
         {
            notifications.length === 0 && <div className='bg-gray-100 p-2'>You have no notifications yet.</div>
          }
        <ul className='max-h-[66vh] overflow-y-scroll'>
         
            {notifications.map((notification) => (
                <li key={notification._id} className={`p-2 mb-2 rounded ${notification.isRead ? 'bg-gray-100' : 'bg-blue-100 font-bold'}`}>
                    {notification.message}
                </li>
            ))}
        </ul>
    </div>
  )
}
