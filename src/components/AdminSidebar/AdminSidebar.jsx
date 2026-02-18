import React, { use, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router';
import { animate, AnimatePresence, motion } from 'framer-motion';
import { Folders, Gauge, icons, Users, Package, PackagePlus, Settings, User, MessageSquareIcon } from 'lucide-react';
import { OrderInvoiceContext } from '../../context/Context';
export default function AdminSidebar() {
    const Links = [
        { name: "Dashboard", path: "/admin/dashboard", icon: <Gauge /> },
        { name: "Add Products", path: "/admin/add-products", icon: <PackagePlus /> },
        { name: "Products", path: "/admin/products", icon: <Package /> },
        { name: "Orders", path: "/admin/orders", icon: <Folders /> },
        { name: "Messenger", path: "/admin/messenger", icon: <MessageSquareIcon /> },
        { name: "Profile", path: "/admin/profile", icon: <User /> },
    ];
     
    const location = useLocation();
    const navigate =  useNavigate();
    const [isActive, setIsActive] = useState("/admin/dashboard");
    useEffect(() => {
        setIsActive(location.pathname);
    }, [location.pathname])
    const handleclick = (name) => {

    }
    
    const [isHovered , setIsHovered] = useState(true);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
        const { setSidebarOpen , sidebarOpen} = useContext(OrderInvoiceContext);

    return (
        <>
         <motion.div
            className='bg-white w-full md:w-37  min-h-screen h-full '>
            {
                Links.map((link, index) => (
                    <div key={index} className={`py-2 px-4  font-semibold pl-30 md:pl-2  hover:bg-gray-200 cursor-pointer flex  items-center gap-2 overflow-hidden ${isActive === link.path ? "bg-gray-300" : ""}`}
                     onClick={() => { navigate(link.path); setSidebarOpen(false); }}>
                        <div className='text-amber-500'>
                            {link.icon}
                        </div>
                        <AnimatePresence>
                            {isHovered && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {link.name}
                                </motion.span>
                            )}
                        </AnimatePresence>
                                                

                    </div>
                ))
            }
        </motion.div>
        </>
    )
}
