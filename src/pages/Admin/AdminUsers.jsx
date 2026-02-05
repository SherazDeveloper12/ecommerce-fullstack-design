import React from 'react'

export default function AdminUsers() {
    return (
        <div className='flex flex-col p-4 w-full'>
            <h2 className='text-xl font-semibold text-gray-400'>Users</h2>
            <div className='mt-4 bg-white shadow rounded-lg p-4'>
                <table className='w-full table-auto'>
                    <thead>
                        <tr className='bg-gray-100 rounded-t-lg overflow-hidden'>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>User ID</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Username</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Email</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Role</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='px-4 py-2 border-t text-sm text-gray-700'>#5678</td>
                            <td className='px-4 py-2 border-t text-sm text-gray-700'>Jane Doe</td>
                            <td className='px-4 py-2 border-t text-sm text-gray-700'>jane.doe@example.com</td>
                            <td className='px-4 py-2 border-t text-sm text-gray-700'>Admin</td>
                            <td className='px-4 py-2 border-t text-sm text-gray-700'>
                                <button className='px-3 py-1 bg-blue-500 text-white rounded'>Edit</button>
                                <button className='px-3 py-1 bg-red-500 text-white rounded ml-2'>Delete</button>
                            </td>
                        </tr>
                        {/* More users can be added here */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
