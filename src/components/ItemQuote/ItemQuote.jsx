import React from 'react'
import itemquote from '../../assets/Image/backgrounds/itemquote.png'
export default function ItemQuote() {
    return (
        <div className='relative w-full  shadow-lg bg-cover bg-center flex rounded-lg justify-center gap-2 p-4' style={{ backgroundImage: `url(${itemquote})` }}>
            <div className='flex flex-col gap-4 p-4 pr-64'>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-bold  text-white '>An easy way to send requests to all suppliers</h2>
                <p className=' md:text-lg lg:text-xl text-white '> type your request here Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus a enim tempora? </p>
            </div>
            
            <div className='bg-white rounded-lg flex flex-col justify-center gap-2 p-3 shadow-lg'>
                <h2 className='font-semibold'>Send quote to suppliers</h2>
                <input type="text" placeholder='Type your item name you need' className='border border-gray-300 rounded-lg p-2 w-80 md:w-96 lg:w-[500px]' />
                <textarea placeholder='Type your item details you need' className='border border-gray-300 rounded-lg p-2 w-80 md:w-96 lg:w-[500px] mt-2' rows={4} />
                <div className='flex gap-2 '>
                    <input type="text" placeholder='Number of items' className='border border-gray-300 rounded-lg p-2 w-full' />
                    <select className='border border-gray-300 rounded-lg p-2   '>
                        <option>Unit</option>
                        <option>Piece</option>
                        <option>Kg</option>
                        <option>Box</option>
                    </select>
                </div>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg '>Send Request</button>
            </div>
        </div>
    )
}
