import React, { use, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router';
import { animate, AnimatePresence, motion } from 'framer-motion';
import { Folders, Gauge, icons, Users, Package, PackagePlus } from 'lucide-react';
export default function AdminSidebar() {
    const Links = [
        { name: "Dashboard", path: "/admin/dashboard", icon: <Gauge /> },
        { name: "Add Products", path: "/admin/add-products", icon: <PackagePlus /> },
        { name: "Products", path: "/admin/products", icon: <Package /> },
        { name: "Orders", path: "/admin/orders", icon: <Folders /> },
        { name: "Users", path: "/admin/users", icon: <Users /> },
    ];
    const location = useLocation();
    const navigate =  useNavigate();
    const [isActive, setIsActive] = useState("/admin/dashboard");
    useEffect(() => {
        setIsActive(location.pathname);
    }, [location.pathname])
    const handleclick = (name) => {

    }
    
    const [isHovered , setIsHovered] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
         <motion.div
        
            initial={{ width: 60,  }}
            whileHover={ {  width: 150,  } }
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ duration: 0.5 }}
            className='bg-white static bottom-0  h-full'>
            {
                Links.map((link, index) => (
                    <div key={index} className={`py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center gap-2 overflow-hidden ${isActive === link.path ? "bg-gray-300" : ""}`}
                     onClick={() => navigate(link.path)}>
                        <div className='text-gray-500'>
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
