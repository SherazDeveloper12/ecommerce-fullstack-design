import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import DealsOffer from '../components/DealsOffer/DealsOffer'

import interiorbg from '../assets/interiorbg.png'
import Techbg from '../assets/electronicsbg.png'
import ShowcaseGroup from '../components/ShowcaseGroup/ShowcaseGroup'
import ItemQuote from '../components/ItemQuote/ItemQuote'
import RecommendedItems from '../components/RecommendedItems/RecommendedItems'
import ExtraServices from '../components/ExtraServices/ExtraServices'
import Suppliers from '../components/Suppliers/Suppliers'
import NewsLetterSubscription from '../components/NewsLetterSubscription/NewsLetterSubscription'

import { useSelector } from 'react-redux'
export default function Home() {
  const products =  useSelector((state) => state.products.Products);
  const showcaseData = [
    {
      title: 'Electronics',
      products: products.filter(product => product.category === 'Tech'),
      backgroundImg: interiorbg,
    },
    {
      title: 'Living Room',
      products: products.filter(product => product.category === 'Interior'),
      backgroundImg: Techbg,
    },
    
  ]
   
  return (
    <div className='flex flex-col gap-5 pt-5  '>
      <div className=' flex flex-col gap-5 py-5 max-w-7xl mx-auto'>
      <HomeHero />
      <DealsOffer />
      {showcaseData.map((showcase, index) =>(
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
