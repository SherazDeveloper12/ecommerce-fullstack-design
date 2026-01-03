import React from 'react'

export default function Help() {
  return (
    <div className='max-w-7xl m-auto py-2 '>
      <h1 className='text-3xl font-bold mb-4'>Help Page</h1>
      <p className='text-lg'>
        If you need assistance, please contact our support team at support@example.com or fill out the contact form below:
      </p>
      <ContactForm />
    </div>
  )
}

function ContactForm() {
return (
<div className=' flex flex-col gap-2  m-auto bg-white border border-gray-200 p-4 rounded-lg my-4'>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" className="border border-gray-300 rounded-md p-2" />
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" className="border border-gray-300 rounded-md p-2" />
  <label htmlFor="message">Message:</label>
  <textarea id="message" name="message" className="border border-gray-300 rounded-md p-2" rows="4"></textarea>
  <button type="submit" className="bg-blue-500 text-white rounded-md p-2 mt-2 cursor-pointer">Submit</button>
</div>
)}