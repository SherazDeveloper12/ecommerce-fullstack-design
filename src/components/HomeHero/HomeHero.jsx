import React from 'react'
import bgbanner from '../../assets/bg-banner.png'
import { User } from 'lucide-react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
export default function HomeHero() {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const links = [
        { name: 'Automobiles', url: '/', active: true },
        { name: 'Clothes and wear', url: '/categories' },
        { name: 'Home interiors', url: '/deals' },
        { name: 'Computer and Tech', url: '/contact' },
        { name: 'Tools and Equipments', url: '/contact' },
        { name: 'Sports and outdoor', url: '/contact' },
        { name: 'Animals and pets', url: '/contact' },
        { name: 'Machinery and tools', url: '/contact' },
        { name: 'More Categories', url: '/contact' },
    ];
    return (
        <div className='flex bg-white gap-1 p-5  rounded-lg justify-center  border border-gray-200 shadow-md'>
            <div className='flex-1 p-2'>
                <ul className='flex flex-col gap-1 text-left '>
                    {links.map((link) => (
                        <li key={link.name} className={`p-2 rounded-xl cursor-pointer hover:text-blue-600 text-gray-500 text-lg ${link.active ? 'bg-[#e3f0ff] text-black font-bold' : ''}`}>
                            {link.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex-3 object-cover  w-full rounded-lg overflow-hidden relative '>
                <img src={bgbanner} alt='hero image' className='w-full h-full object-cover ' />
                <div className='absolute top-1/5 left-12 text-white'>
                    <p className='text-2xl font-medium text-black'>Latest Trending</p>
                    <h1 className='text-3xl font-bold text-black' >Electronic items</h1>
                    <button className='mt-4 cursor-pointer shadow-md bg-white text-black px-6 py-2 font-medium rounded-lg'>Learn More</button>
                </div>
            </div>

            <div className='flex-1 flex flex-col  gap-2.5 px-2 '>
                <div className='bg-[#e3f0ff] p-4 rounded-lg  ' >
                    {user ? (
                        <div className='flex gap-2.5 mb-4'>
                            <div className='rounded-full bg-blue-300 flex items-center size-12 text-white justify-center'><User size={20} /></div>
                            <div>
                                <p>Welcome back,</p>
                                <p className='font-bold'>{user.username}</p>
                            </div>
                        </div>
                    ) : (<>
                        <div className='flex gap-2.5 mb-4'>
                            <div className='rounded-full bg-blue-300 flex items-center size-12 text-white justify-center'><User size={20} /></div>
                            <div>
                                <p>Hi, user. </p>
                                <p>lets get started</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-2 w-full'>
                            <button
                             onClick={()=>navigate('/signup')}
                             className='bg-blue-600 text-white py-2  cursor-pointer w-full rounded-lg hover:bg-blue-700'>Join now</button>
                            <button
                             onClick={()=>navigate('/login')}
                             className=' bg-white text-blue-600 py-2  cursor-pointer w-full rounded-lg hover:bg-gray-300'>Log in</button>
                        </div></>
                    )}
                </div>
                <div className='bg-[#f38332]   text-white  px-12 py-5 rounded-lg text-left cursor-pointer'>
                    <p className='text-lg'>Get US $10 off with a new supplier</p>
                </div>
                <div className='bg-[#55bdc3]  text-white px-12 py-5 rounded-lg text-left cursor-pointer'>
                    <p className='text-lg'>Send quotes with supplier preferences</p>
                </div>
            </div>
        </div>
    )
}