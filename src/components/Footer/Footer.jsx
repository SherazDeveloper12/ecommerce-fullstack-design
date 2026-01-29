import React from 'react'
import logo from '../../assets/logo.png'
import googleplay from '../../assets/googleplay.png'
import appstore from '../../assets/appstore.png'
import us from '../../assets/us.png'
import fr from '../../assets/fr.png'
import it from '../../assets/it.png'
import { Facebook, Youtube , Twitter, Linkedin, Instagram} from 'lucide-react';
export default function Footer() {
    const Links = [
    { heading: "About",
        links: [
            {name: "About Us",
                route: "/"
            }, 
            {name: "Find Store",
                route: "/your-orders"
            }, 
            {name: "Categories",
                route: "/gift-box"
            }, 
            {name: "Blog",
                route: "/projects"
        
            } ] },
    { heading: "Partnership",
        links: [
          {  name: "Payments"
            , route: "/"
          }, 
          {name: "Shipping",
            route: "/shipping"
          },
          {name: "Cancellation & Returns",
            route: "/cancellation-returns"
          },
          {name: "FAQ",
            route: "/faq"
          },
          {name: "Report Infringement",
            route: "/report-infringement"
          }
        ] },
    { heading: "Information",
        links: [
            {name: "Return Policy"
            , route: "/"
            }, {name: "Terms Of Use",
                route: "/terms-of-use"
            }, {name: "Security",
                route: "/security"
            }, {name: "Privacy",
                route: "/privacy"
            }, {name: "Sitemap",
                route: "/sitemap"
            }]
     },
    { heading: "For Users",
        links: [
            {name: "Login", route: "/login"},
            {name: "Register", route: "/register"},
            {name: "Settings", route: "/settings"},
            {name: "My Orders", route: "/my-orders"},
            {name: "My Wishlist", route: "/my-wishlist"}
        ] }
    ];
    return (
        <div className='bg-white  pt-10 '>
            <div className='max-w-7xl mx-auto flex justify-between'>
                <div className='flex-1 flex flex-col gap-5'>
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-10 w-10 inline-block mr-2" />
                        <h1 className="text-[#8CB7F5] text-2xl font-bold">Brand</h1>
                    </div>
                    <p className='text-gray-500 font-semibold pr-25'>Best information about the company gies here but now lorem ipsum is</p>
                    <SocialIcon />
                </div>
                <div className='flex-2 flex justify-between flex-row gap-8'>
                   { Links.map((section) => (
                    <div key={section.heading} className='mb-6'>
                        <h3 className='text-lg font-semibold mb-4'>{section.heading}</h3>
                        <ul>
                            {section.links.map((link) => (
                                <li key={link.name} className='mb-2'>
                                    <a href={link.route} className='text-gray-600 hover:text-gray-800 transition-colors duration-300'>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                   ))}
                </div>
                <div className='flex-1  flex flex-col items-end '>
                    <h3 className='text-lg font-semibold mb-4 mr-14'>Get app</h3>
                    <div>
                        <img src={googleplay} alt="Get App" className='cursor-pointer'/>
                        <img src={appstore} alt="App Store" className='mt-4 cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className='bg-[#eff2f4] mt-10 flex  items-center justify-between px-10'>
                <div>© 2023 Ecommerce. </div>
                <div>
                <select name="language" id="language" className="  text-gray-600  px-3 py-4.5 focus:outline-none" >
                    <option value="en" className='flex items-center p-5'>
                        English
                        </option>
                    <option value="es">
                        Italy
                        </option>
                    <option value="fr" className='flex items-center p-5'>
                        French
                        </option>
                </select>
                </div>
            </div>
        </div>
    )
}



function SocialIcon() {
    return (
        <div className='flex gap-4'> 
            <span className='bg-blue-300 p-2 rounded-full '><Facebook   fill='white' stroke='none'  /></span>
            <span className='bg-blue-300 p-2 rounded-full '><Twitter fill='white' stroke='none'/></span>
            <span className='bg-blue-300 p-2 rounded-full '><Linkedin fill='white' stroke='none'/></span>
            <span className='bg-blue-300 p-2 rounded-full '><Instagram color='white'/></span>
            <span className='bg-blue-300 p-2 rounded-full '><Youtube color='white'/></span>
        </div>
    )
}