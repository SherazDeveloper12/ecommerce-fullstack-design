import { Disc } from 'lucide-react'
import React from 'react'
import mobiles from '../../assets/mobiles.png'
import watch from '../../assets/watch.png'
import laptop from '../../assets/laptop.png'
import headset from '../../assets/headset.png'
import CountDownTimer from '../CountDownTimer/CountDownTimer'
export default function DealsOffer() {
    const Products = [
        {
            id: 1,
            name: "Samsung Mobile",
            Discount: "-20%",
            imageUrl: mobiles
        },
        {
            id: 2,
            name: "Laptop",
            Discount: "-30%",
            imageUrl: laptop
        },
        {
            id: 3,
            name: "Smart Watch",
            Discount: "-15%",
            imageUrl: watch
        },
        {
            id: 4,
            name: "Headset",
            Discount: "-25%",
            imageUrl: headset
        },
        {
            id: 5,
            name: "Samsung Mobile",
            Discount: "-10%",
            imageUrl: mobiles
        }
    ]

  return (
    <div className='flex justify-center shadow-md bg-white border border-gray-300 border-collapse rounded-xl overflow-hidden flex-wrap'>
        <div className='flex-1  border border-gray-300  flex justify-center items-center font-bold '>
            <CountDownTimer />
        </div>
            {Products.map((product) => (
                <div key={product.id} className=' flex flex-col justify-center items-center  gap-2  border border-gray-300 border-collapse px-8 py-4 '>
                    <img src={product.imageUrl} alt={product.name} className='' />
                    <div className=''>{product.name}</div>
                    <p className=' bg-red-200 text-red-500 font-medium px-2 py-0.5 rounded-full'>{product.Discount}</p>
                </div>
            ))}
        
    </div>
  )
}
