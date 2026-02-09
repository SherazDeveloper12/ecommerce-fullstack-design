import { Bell, List, User, ShoppingCart, Heart, LogOut } from "lucide-react";

import { useState, ReactElement, useContext } from "react";

import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/auth";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/Context";
import Notifcation from "../Notifcation/Notifcation";

export default function ActionButtons() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [userIsOpen , setUserIsOpen] = useState(false);
  const navigate = useNavigate();
  const {cartIsOpen, setCartIsOpen} = useContext(CartContext);
  const [NotifcationVisible, setNotifcationVisible] = useState(false);
  const {notifications} = useSelector((state) => state.notifications);
    const unreadNotifications = notifications.filter(notification => notification.isRead === false);
   
  return (
  
    <div className="flex items-center gap-5">
      <div onClick={()=>{setUserIsOpen(!userIsOpen); setNotifcationVisible(false);}}
       className="flex flex-col text-sm  items-center text-gray-600 cursor-pointer transition duration-300 ease-in-out relative "><User size={18}/>
        <p>User</p>
    
        {userIsOpen && 
        <div className="absolute top-12 right-5 bg-white border border-gray-200 shadow-lg rounded-md p-4 w-40 z-50">
          <ul>
            {
              user ? <>
<li onClick={() => { dispatch(logout()); }}
             className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Logout</li>
              </> :<>
              <li onClick={() => { navigate('/login')}} 
             className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Sign in</li>
             <li onClick={() => { navigate('/signup')}} 
             className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Sign up</li>
              </>
            }
            
            
          </ul>
        </div>
        }

      </div>
       
      <div 
      onClick={()=>{setNotifcationVisible(!NotifcationVisible); setUserIsOpen(false);}}
      className=" relative flex flex-col text-sm items-center text-gray-600 cursor-pointer transition duration-300 ease-in-out ">
        <Bell size={18}/>
        <p>Notifications</p>
         {unreadNotifications.length > 0 && (
                  <span className="absolute -top-2 right-2 inline-flex items-center justify-center size-4  text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {unreadNotifications.length}
                  </span>
                )}
      </div>
      <div
      onClick={()=>{navigate('/orders'); setNotifcationVisible(false); setUserIsOpen(false);}}
      className="flex flex-col text-sm  items-center text-gray-600 cursor-pointer transition duration-300 ease-in-out "><Heart size={18}/>
        <p>Orders</p>
      </div>
      <div 
      onClick={() =>{ setCartIsOpen(!cartIsOpen); setNotifcationVisible(false); setUserIsOpen(false);}}
      className="flex flex-col text-sm  items-center text-gray-600 cursor-pointer transition duration-300 ease-in-out "><ShoppingCart size={18}/>
        <p>Cart</p>
      </div>
      <div> {isOpen ? <X onClick={() => setIsOpen(!isOpen)} size={20} className="text-gray-600 cursor-pointer transition duration-300 ease-in-out md:hidden " /> : <List onClick={() => setIsOpen(!isOpen)} size={20} className="text-gray-600 cursor-pointer transition duration-300 ease-in-out md:hidden " />}</div>
       {NotifcationVisible && <div className="absolute  h-fit right-32 top-0"> <Notifcation /> </div>}
      {isOpen && <Sidebar />}
    </div>
  )
}
