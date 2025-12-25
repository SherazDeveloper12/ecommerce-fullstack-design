import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import DealsOffer from '../components/DealsOffer/DealsOffer'
export default function Home() {
  return (
    <div className='flex flex-col gap-5 py-5'>
      <HomeHero />
      <DealsOffer />
    </div>
  )
}
