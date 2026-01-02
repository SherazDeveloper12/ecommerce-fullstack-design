import { ChevronRight, ShieldCheck, Globe, Check, Circle, } from 'lucide-react';
import React, { useEffect } from 'react'
import Stars from '../components/Stars/Stars';
import { useSelector } from 'react-redux';
import flag from '../assets/au.png';
import SuggestedProducts from '../components/SuggestedProducts/SuggestedProducts';
import { useParams } from 'react-router';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
export default function Product() {

    const param = useParams();
    const uid = param.id;
    const products = useSelector((state) => state.products.Products);
    console.log('Products in Product page:', products);
    const SelectedProduct = products.find(prod => prod.uid === uid);

    return (
        <div className='max-w-7xl m-auto flex flex-col gap-8 p-4'>
            <div className='text-gray-400 text-lg flex gap-2 items-center justify-start'>
                <p>Home</p>
                <ChevronRight size={16} />
                {SelectedProduct.category}
                <ChevronRight size={16} />
                {SelectedProduct.brand}
                <ChevronRight size={16} />
                {SelectedProduct.title}
            </div>
            <div className=' flex bg-white border border-gray-200 rounded-lg shadow-md p-4 gap-8'>
                <div className='flex-1 flex flex-col gap-4'>
                    <div className=' rounded-lg overflow-hidden border border-gray-200'>
                        <img src={SelectedProduct.img} alt={SelectedProduct.title} className='max-h-96 mx-auto p-4' />
                    </div>
                    <div className='flex gap-4'>
                        <div className='rounded-lg overflow-hidden border border-gray-200'>
                            <img src={SelectedProduct.img} alt={SelectedProduct.title} className='max-h-14  ' />
                        </div>
                        <div className='rounded-lg overflow-hidden hue-rotate-30 brightness-75 border  border-gray-200'>
                            <img src={SelectedProduct.img} alt={SelectedProduct.title} className='max-h-14  ' />
                        </div>
                        <div className='rounded-lg overflow-hidden hue-rotate-30  border  border-gray-200'>
                            <img src={SelectedProduct.img} alt={SelectedProduct.title} className='max-h-14  ' />
                        </div>
                        <div className='rounded-lg overflow-hidden saturate-50 border  border-gray-200'>
                            <img src={SelectedProduct.img} alt={SelectedProduct.title} className='max-h-14  ' />
                        </div>

                    </div>
                </div>
                <div className='flex-2 flex flex-col gap-3'>
                    <div className='flex gap-1 items-center text-green-500 font-semibold'><Check /> <p>In stock</p></div>
                    <h1 className='text-3xl font-bold'>{SelectedProduct.heading} | {SelectedProduct.category}</h1>
                    <div className='flex gap-2'>
                        <Stars rating={SelectedProduct.rating} />
                        <span className='text-[#dee2e7] flex gap-2 justify-center items-center'>
                            <Circle fill='#dee2e7' stroke='0' size={10} />
                            <p className='font-semibold text-gray-400'>{SelectedProduct.orders} Orders</p>
                            <Circle fill='#dee2e7' stroke='0' size={10} />
                        </span>
                        {SelectedProduct.freeShipping ? <p className='font-semibold text-green-400'>Free Shipping</p> : ''}
                    </div>
                    <div className='bg-red-100 p-4 flex divide-x divide-gray-400'>
                        <div className='p-2 flex-1'>
                            <h2 className='text-red-600 font-bold text-xl'>$ {SelectedProduct.price}.00</h2>
                            <p className='text-gray-400 font-semibold'>50-100 pcs</p>
                        </div>
                        <div className='p-2 flex-1'>
                            <h2 className='text-black font-bold text-xl'>$ {SelectedProduct.price - 10}.00</h2>
                            <p className='text-gray-400 font-semibold'>100-700 pcs</p>
                        </div>
                        <div className='p-2 flex-1'>
                            <h2 className='text-black font-bold text-xl'>$ {SelectedProduct.price - 20}.00</h2>
                            <p className='text-gray-400 font-semibold'>700+ pcs</p>
                        </div>

                    </div>
                    <div className='flex font-semibold gap-8 items-center border-b border-gray-300 pb-4'>
                        <p className='text-gray-500 flex-1'>Price:</p>
                        <p className='flex-2'>Negotiable</p>
                    </div>
                    <div className='flex flex-col  gap-4 border-b border-gray-300 pb-4'>
                        <div className='flex font-semibold gap-8 items-center'>
                            <p className='text-gray-500 flex-1'>Brand:</p>
                            <p className='flex-2'>{SelectedProduct.brand}</p>
                        </div>
                        <div className='flex font-semibold gap-8 items-center'>
                            <p className='text-gray-500 flex-1'>Material: </p>
                            <p className='flex-2'>{SelectedProduct.features.map(feature => (<span key={feature}>{feature}, </span>))}</p>
                        </div>
                        <div className='flex font-semibold gap-8 items-center'>
                            <p className='text-gray-500 flex-1'>Category:</p>
                            <p className='flex-2'>{SelectedProduct.category}</p>
                        </div>

                    </div>
                    <div className='flex flex-col  gap-4 border-b border-gray-300 pb-4'>
                        <div className='flex font-semibold gap-8 items-center'>
                            <p className='text-gray-500 flex-1'>Customization:</p>
                            <p className='flex-2'>Customized logo and design custom packages</p>
                        </div>
                        <div className='flex font-semibold gap-8 items-center'>
                            <p className='text-gray-500 flex-1'>Protection:</p>
                            <p className='flex-2'>Refund Policy</p>
                        </div>
                        <div className='flex font-semibold gap-8 items-center'>
                            <p className='text-gray-500 flex-1'>Warranty:</p>
                            <p className='flex-2'>2 years full warranty </p>
                        </div>

                    </div>

                </div>
                <div className='flex-1'>
                    <div className='rounded-lg border border-gray-200 p-3 flex flex-col gap-2 '>
                        <div className='flex gap-3 justify-center items-center pb-4 border-b border-gray-200'>
                            <div className='size-12 bg-blue-200 p-2 rounded-lg font-semibold text-2xl flex justify-center items-center text-blue-600 '>R </div>
                            <div>
                                <p>Supplier</p>
                                <p>Guanjoi Trading LLC</p>
                            </div>
                        </div>
                        <div>
                            <ul className='text-gray-400 flex flex-col gap-4'>
                                <li className='flex gap-2 justify-between items-center'>
                                    <span>
                                        <img src={flag} alt={SelectedProduct.title} className='w-8 h-6 rounded-sm ' />
                                    </span>
                                    <span className='font-semibold'>Location: Australia</span>
                                </li>
                                <li className='flex gap-2 justify-between items-center'>
                                    <span>
                                        <ShieldCheck size={24} X />
                                    </span>
                                    <span className='font-semibold'>Verified Seller</span>
                                </li>
                                <li className='flex gap-2 justify-between items-center'>
                                    <span>
                                        <Globe size={24} />
                                    </span>
                                    <span className='font-semibold'>Worldwide shipping</span>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col justify-center gap-2 w-full'>
                            <button className='bg-blue-600 text-white w-full py-2 px-8  rounded-lg hover:bg-blue-700 transition'>Send Query</button>
                            <button className=' text-blue-600 w-full py-2 px-8  rounded-lg bg-white border border-gray-200 hover:bg-gray-300 transition'>View Profile</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex gap-2'>
                <div className='bg-white border border-gray-200  rounded-lg shadow-md p-4'>
                    <p>{SelectedProduct.description} <br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsam perspiciatis inventore officiis? Voluptas vel repudiandae atque, quod reiciendis consequatur odio dicta distinctio eaque, at expedita sapiente repellendus a fugiat ratione ducimus inventore accusamus<br></br> odit, quia aperiam soluta dolore ipsum. Facere deserunt corrupti odio eius veniam esse exercitationem tempora voluptas voluptate dolorum similique voluptatum excepturi quisquam sed distinctio quidem cupiditate aperiam, soluta labore eum consectetur repudiandae? Maxime, id! Similique facere minima soluta a est pariatur amet rerum ullam id. {SelectedProduct.description}us quo rerum voluptates? Quod voluptatibus reprehenderit velit earum eaque ratione ipsa dignissimos, aliquid sapiente deleniti vel? Ullam cum et a deserunt natus numquam alias dolore accusamus eveniet eius unde tempora, est reiciendis molestiae quia, explicabo quod in non, optio dolores cu{SelectedProduct.description}uos cumque voluptatum sapiente, ex nam atque, voluptate doloremque excepturi <br></br>qui dolor necessitatibus, eos voluptatem similique quae placeat! Earum quisquam consectetur facere id explicabo consequatur sunt, eum blanditiis? Quibusdam soluta, libero incidunt exerc{SelectedProduct.description}um, aperiam reiciendis? Corporis ad ex odit porro, autem, assumenda nisi numquam aspernatur quo aliquid eius dolorem, provident dolores voluptatem ducimus deserunt quod ipsum odio architecto itaque? Delectus est at dolor?</p>
                </div>
                <div className=''><SuggestedProducts /></div>
            </div>
            <div><RelatedProducts category={SelectedProduct.category} /></div>
        </div>
    )
}
