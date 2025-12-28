import React from 'react'
import mobile from '../assets/11.png'
import { Star, Circle, Heart, ChevronRight } from 'lucide-react'
import { products } from '../lib/constant'
import DropDown from '../components/DropDown/DropDown'
import DropDownRadio from '../components/DropDown/DropDown'
import NewsLetterSubscription from '../components/NewsLetterSubscription/NewsLetterSubscription'
import Stars from '../components/Stars/Stars'
export default function Products() {
    const links = [
        {
            name: 'Mobile accessory',
            route: '/mobile-accessory'
        },
        {
            name: 'Electronics',
            route: '/electronics'
        },
        {
            name: 'Smartphones ',
            route: '/smartphones'
        },
        {
            name: 'Modern tech',
            route: '/modern-tech'
        },
    ]

    return (
        <div className=''>
            <div className='flex max-w-7xl mx-auto gap-4 py-4'>
                <div className='flex-1 flex flex-col gap-4 '>
                    <DropDown Links={links} heading='All Categories' />

                    <DropDown CheckboxName={['Samsung', 'Huawei', 'Apple', 'Xiaomi', 'Lenovo']} heading='Brands' />
                    <DropDown CheckboxName={['Metallic', 'Plastic', 'Leather', 'Wood', 'Glass']} heading='Features' />
                    <DropDown PriceRange={[0, 20000]} heading='Price Range' />
                    <DropDown RadioName={['Any', 'Refurbished', 'New', 'Used']} heading='Condition' />
                    <DropDown Rating={true} heading='Rating' />
                </div>
                <div className='flex-4 flex flex-col gap-4 overflow-y-auto '>
                    {products.map((product, index) => (
                        <div className='flex gap-4 bg-white rounded-lg border border-gray-300 shadow-md' id={index}>
                            <div className='flex-1 flex justify-center items-center'>
                                <img src={product.img} alt={product.title} />
                            </div>
                            <div className='flex-3 flex flex-col gap-3 p-4 relative'>
                                <h1>{product.heading}</h1>
                                <div>
                                    <div className='flex gap-4'>
                                        <p className='font-semibold'>${product.price}.00</p>
                                        <p className='text-gray-500 line-through'>$1128.00</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Stars rating={product.rating} />
                                        <span className='text-[#dee2e7] flex gap-2 justify-center items-center'>
                                            <Circle fill='#dee2e7' stroke='0' size={10} />
                                            <p className='font-semibold text-gray-400'>{product.orders} Orders</p>
                                            <Circle fill='#dee2e7' stroke='0' size={10} />
                                        </span>
                                        {product.freeShipping ? <p className='font-semibold text-green-400'>Free Shipping</p> : ''}
                                    </div>
                                </div>
                                <div>
                                    <p className='text-gray-400 pr-32'>{product.description}</p>
                                </div>
                                <a href="#" className='text-blue-400 font-semibold'>View Details</a>
                                <div className='flex justify-center items-center rounded-lg border border-blue-600 p-2 absolute top-4 right-4 cursor-pointer'>
                                    <Heart color='blue' />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <NewsLetterSubscription />
        </div>
    )
}



