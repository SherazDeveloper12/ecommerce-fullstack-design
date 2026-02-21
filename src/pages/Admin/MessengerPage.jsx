import React from 'react'
import Messenger from '../../components/Messenger/Messenger';
export default function MessengerPage() {

  return (
    <div className='flex flex-col h-full p-2 py-4 gap-2 w-full'>
      <h1 className='text-neutral-400 text-2xl font-semibold'>Messenger</h1>
    <Messenger />
    </div>
  )
}
