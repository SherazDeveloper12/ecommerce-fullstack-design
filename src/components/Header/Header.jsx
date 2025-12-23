import React from 'react'
import ActionButtons from "./ActionButtons"
import Navbar from "./Navbar"
import logo from '../../assets/logo.png'


export default function Header() {


  return (
    <div className='bg-white text-black p-2.5 flex justify-between items-center max-w-7xl mx-auto sticky top-0 z-50'>
      <div className="absolute inset-0 backdrop-blur-[5px] -z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-primary/30 via-primary/90 to-primary/30 -z-10"></div>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-8 inline-block mr-2"/>
        <h1 className="text-[#8CB7F5] text-2xl font-bold">Brand</h1>
      </div>
      <div className="hidden md:block min-w-[700px]"><Navbar /> </div>
      <div><ActionButtons /></div>
    </div>
  )
}
