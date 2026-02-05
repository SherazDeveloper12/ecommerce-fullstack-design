import React from 'react'

export default function AdminOrders() {
  return (
    <div className='flex flex-col p-4 w-full'>
        <h2 className='text-xl font-semibold text-gray-400'>Orders</h2>
        <div className='mt-4 bg-white shadow rounded-lg p-4'>
            <table className='w-full table-auto'>
                <thead>
                    <tr className='bg-gray-100 rounded-t-lg overflow-hidden'>
                        <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Order ID</th>
                        <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Customer</th>
                        <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Total</th>
                        <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Status</th>
                        <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-4 py-2 border-t text-sm text-gray-700'>#1234</td>
                        <td className='px-4 py-2 border-t text-sm text-gray-700'>John Doe</td>
                        <td className='px-4 py-2 border-t text-sm text-gray-700'>$99.99</td>
                        <td className='px-4 py-2 border-t text-sm text-gray-700'>Pending</td>
                        <td className='px-4 py-2 border-t text-sm text-gray-700'>
                            <button className='px-3 py-1 bg-green-500 text-white rounded'>View</button>
                            <button className='px-3 py-1 bg-red-500 text-white rounded ml-2'>Cancel</button>
                        </td>
                    </tr>
                    {/* More orders can be added here */}
                </tbody>
            </table>
        </div>
    </div>
  )
}
