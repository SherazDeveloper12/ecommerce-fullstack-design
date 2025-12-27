import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import DealsOffer from '../components/DealsOffer/DealsOffer'
import ShowcaseGroup from '../components/ShowcaseGroup/ShowcaseGroup'
import { showcaseStuff } from '../lib/constant'
import ItemQuote from '../components/ItemQuote/ItemQuote'
import RecommendedItems from '../components/RecommendedItems/RecommendedItems'
import ExtraServices from '../components/ExtraServices/ExtraServices'
import Suppliers from '../components/Suppliers/Suppliers'
import NewsLetterSubscription from '../components/NewsLetterSubscription/NewsLetterSubscription'
export default function Home() {
  return (
    <div className='flex flex-col gap-5 pt-5  '>
      <div className=' flex flex-col gap-5 py-5 max-w-7xl mx-auto'>
      <HomeHero />
      <DealsOffer />
      {showcaseStuff.map((showcase, index) => (
        <ShowcaseGroup key={index} title={showcase.title} products={showcase.products} backgroundImg={showcase.backgroundImg} />
      ))}
      <ItemQuote />
      <RecommendedItems />
      <ExtraServices />
      <Suppliers />
      </div>
      <NewsLetterSubscription />
    </div>
  )
}
