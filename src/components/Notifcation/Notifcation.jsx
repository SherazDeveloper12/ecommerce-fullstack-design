import { Type } from 'lucide-react'
import React from 'react'

export default function Notifcation() {
    const orders = [
        {id: 1, message: 'New order placed: #1234', isSeen: false, Type: 'order'},
        {id: 2, message: 'Order #1233 has been shipped'     , isSeen: true, Type: 'order'},
        {id: 3, message: 'New user registered: john_doe', isSeen: false, Type: 'user'},
    ]
  return (
    <div className='absolute top-14 right-18 bg-white border border-gray-300 rounded shadow p-4'>
        <h2 className='text-lg font-semibold mb-2'>Notifications</h2>
        <ul>
            {orders.map((order) => (
                <li key={order.id} className={`p-2 mb-2 rounded ${order.isSeen ? 'bg-gray-100' : 'bg-blue-100 font-bold'}`}>
                    {order.message}
                </li>
            ))}
        </ul>
    </div>
  )
}
