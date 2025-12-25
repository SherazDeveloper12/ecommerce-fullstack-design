import { Bell, List, User, ShoppingCart, Heart } from "lucide-react";

import { useState, ReactElement } from "react";

import Sidebar from "./Sidebar";

export default function ActionButtons() {

  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="flex items-center gap-5">
      <div className="flex flex-col text-sm  items-center text-gray-600 cursor-pointer transition duration-300 ease-in-out "><User size={18}/>
        <p>User</p>
      </div>
      <div className="flex flex-col text-sm items-center text-gray-600 cursor-pointer transition duration-300 ease-in-out "><Bell size={18}/>
        <p>Notifications</p>
      </div>
      <div className="flex flex-col text-sm  items-center text-gray-600 cursor-pointer transition duration-300 ease-in-out "><Heart size={18}/>
        <p>Orders</p>
      </div>
      <div className="flex flex-col text-sm  items-center text-gray-600 cursor-pointer transition duration-300 ease-in-out "><ShoppingCart size={18}/>
        <p>Cart</p>
      </div>
      <div> {isOpen ? <X onClick={() => setIsOpen(!isOpen)} size={20} className="text-gray-600 cursor-pointer transition duration-300 ease-in-out md:hidden " /> : <List onClick={() => setIsOpen(!isOpen)} size={20} className="text-gray-600 cursor-pointer transition duration-300 ease-in-out md:hidden " />}</div>
      {isOpen && <Sidebar />}
    </div>
  )
}
