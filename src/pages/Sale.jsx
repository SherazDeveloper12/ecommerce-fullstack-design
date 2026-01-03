import React from 'react'
import DealsOffer from '../components/DealsOffer/DealsOffer'
import NewsLetterSubscription from '../components/NewsLetterSubscription/NewsLetterSubscription'
export default function Sale() {
  return (
    <>
    <div className='flex flex-col gap-5 py-5 max-w-7xl mx-auto'>
      <h1 className='text-4xl text-blue-500 font-bold'>Ongoing Sales and Deals</h1>
      <DealsOffer />
    </div>
    <NewsLetterSubscription />
    </>
  )
}
