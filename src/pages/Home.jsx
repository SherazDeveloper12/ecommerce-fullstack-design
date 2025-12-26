import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import DealsOffer from '../components/DealsOffer/DealsOffer'
import ShowcaseGroup from '../components/ShowcaseGroup/ShowcaseGroup'
import { showcaseStuff } from '../lib/constant'
export default function Home() {
  return (
    <div className='flex flex-col gap-5 py-5'>
      <HomeHero />
      <DealsOffer />
      {showcaseStuff.map((showcase, index) => (
        <ShowcaseGroup key={index} title={showcase.title} products={showcase.products} backgroundImg={showcase.backgroundImg} />
      ))}
    
    </div>
  )
}
