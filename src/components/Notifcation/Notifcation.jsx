import { Type } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Notifcation() {
     const {notifications} = useSelector((state) => state.notifications);
  const unreadNotifications = notifications.filter(notification => !notification.read);
 

  return (
    <div className='absolute top-14 right-18 bg-white border border-gray-300 rounded shadow p-4'>
        <h2 className='text-lg font-semibold mb-2'>Notifications</h2>
        <ul>
            {notifications.map((notification) => (
                <li key={notification._id} className={`p-2 mb-2 rounded ${notification.isRead ? 'bg-gray-100' : 'bg-blue-100 font-bold'}`}>
                    {notification.message}
                </li>
            ))}
        </ul>
    </div>
  )
}
