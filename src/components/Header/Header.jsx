import React, { use, useEffect } from 'react'
import ActionButtons from "./ActionButtons"
import Navbar from "./Navbar"
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


export default function Header() {
  const user = useSelector((state) => state.auth.user);

  const Links = [
    { name: "Home", route: "/" },
    { name: "Products", route: "/products" },
    { name: "Admin", route: "/admin" },
    { name: "About us", route: "/about" },
    { name: "Orders", route: "/orders" },
  ];

  const filterdLinks = user ? Links : Links.filter(link => link.name !== "Admin");
  const navigate = useNavigate();
  return (
    <div className='bg-white text-black relative border-b border-gray-200'>
      <div className='flex justify-between p-3 items-center max-w-7xl mx-auto '>
        <div className="absolute inset-0 backdrop-blur-[5px] -z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-primary/30 via-primary/90 to-primary/30 -z-10"></div>
        <div
          onClick={() => navigate('/')}
          className="flex items-center cursor-pointer">
          <img src={logo} alt="Logo" className="h-8 w-8 inline-block mr-2" />
          <h1 className="text-[#8CB7F5] text-2xl font-bold">Brand</h1>
        </div>
        <div className="hidden md:block"><Navbar /> </div>
        <div><ActionButtons /></div>
      </div>
      <div className='border-b border-gray-200'></div>
      <div className='flex justify-between items-center  max-w-7xl mx-auto px-3 py-1 '>
        <div>
          {filterdLinks.map((link) => (
            <li key={link.name} className='inline-block p-2 text-textSecondary hover:text-textColor cursor-pointer transition duration-300 ease-in-out ' onClick={() => navigate(link.route)}>
              {link.name}
            </li>
          ))}
        </div>
        <div className='hidden md:flex items-center'>
          <div>
            <label className="" htmlFor="language-select">Language</label>
            <select className=" bg-white text-gray-600  px-3 py-1.5 focus:outline-none" >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
          </div>
          <div>
            <label className="ml-4" htmlFor="currency-select">Currency</label>
            <select className=" bg-white text-gray-600  px-3 py-1.5 focus:outline-none">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
