import { ChevronRight, ShieldCheck, Globe, Check, Circle, Plus, Minus, } from 'lucide-react';
import React, { use, useContext, useEffect, useState } from 'react'
import Stars from '../components/Stars/Stars';
import { useDispatch, useSelector } from 'react-redux';
import SuggestedProducts from '../components/SuggestedProducts/SuggestedProducts';
import { useNavigate, useParams } from 'react-router';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import QuantityInput from '../components/QuantityInput/QuantityInput';
import useProduct from '../hooks/useProduct';
import { addItemToCart } from '../store/slices/cart';
import { QuantityContext, CartContext } from '../context/Context';
import { nav } from 'motion/react-client';
export default function Product() {
    const dispatch = useDispatch();
    const { setCartIsOpen } = useContext(CartContext);
    const { quantity, setQuantity } = useProduct(1);
    const param = useParams();
    const _id = param.id;
    const navigate = useNavigate();
    const { status, Products } = useSelector((state) => state.products);
    const SelectedProduct = Products.find(prod => prod._id === _id);

    const [showcaseimage, setshowcaseimage] = React.useState();
    useEffect(() => {
        if (SelectedProduct) {
            setshowcaseimage(SelectedProduct.img[0]);
        }
    }, [SelectedProduct])
    const handleAddcart = (SelectedProduct) => {
        const data = {
            product: SelectedProduct,
            quantity: quantity
        }
        console.log('Adding to cart:', data);
        dispatch(addItemToCart(data));
        setCartIsOpen(true);

    }
    if (status === "loading" || status === "idle" || !SelectedProduct) {
        return <div className='flex justify-center items-center h-screen'>
            <p className='text-gray-500 text-lg'>Loading...</p>
        </div>
    }
    const handleBuyNow = (SelectedProduct) => {
        dispatch(addItemToCart({
            product: SelectedProduct,
            quantity: quantity
        }));
        navigate('/checkout');
    }
    return (
        <QuantityContext.Provider value={{ quantity, setQuantity }}>
            <div className='max-w-7xl m-auto flex flex-col gap-4 p-4'>
                <div className='text-gray-400 text-xs md:text-lg flex gap-2 items-center justify-start'>
                    <p>Home</p>
                    <ChevronRight size={16} />
                    {SelectedProduct.category}
                    <ChevronRight size={16} />
                    {SelectedProduct.brand}
                    <ChevronRight size={16} />
                    {SelectedProduct.title}
                </div>
                <div className=' flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-md p-4 gap-8'>
                    <div className='flex-1 flex flex-col gap-4'>
                        <div className=' rounded-lg overflow-hidden border border-gray-200'>
                            <img src={showcaseimage} alt={SelectedProduct.title} className='max-h-48 md:max-h-96 mx-auto p-4' />
                        </div>
                        <div className='flex gap-4'>
                            {SelectedProduct.img.map((img, index) => (
                                <div key={index} onClick={() => setshowcaseimage(img)} className={`rounded-lg overflow-hidden border ${showcaseimage === img ? 'border-blue-600' : 'border-gray-200'} cursor-pointer`}>
                                    <img src={img} alt={SelectedProduct.title} className='max-h-14  ' />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex-2 flex flex-col gap-3'>
                        <div className='flex gap-1 items-center text-green-500 text-sm md:text-xl font-semibold'>
                            <Check className="w-4 h-4 md:w-6 md:h-6" />
                            <p className=''>In stock</p>
                            {SelectedProduct.quantity - SelectedProduct.orders <= 10 ? <><Circle fill='#dee2e7' stroke='0' size={10} /> <p className='font-semibold text-red-400'> Only {SelectedProduct.quantity - SelectedProduct.orders} left in stock </p></> : ''}
                            {SelectedProduct.quantity - SelectedProduct.orders > 10 ? <><Circle fill='#dee2e7' stroke='0' size={10} /> <p className='font-semibold text-gray-400'> {SelectedProduct.quantity - SelectedProduct.orders} / {SelectedProduct.quantity} </p> </> : ''}
                        </div>
                        <h1 className='text-xl md:text-3xl font-bold'>{SelectedProduct.heading} | {SelectedProduct.category}</h1>
                        <div className='flex gap-2'>
                            {SelectedProduct.rating === 0 || SelectedProduct.rating === undefined ? <p className='text-sm md:text-md text-gray-400'>No ratings yet</p> : <Stars rating={SelectedProduct.rating} />}
                            <span className='text-[#dee2e7] flex gap-2 justify-center items-center'>
                                <Circle fill='#dee2e7' stroke='0' size={10} />
                                {SelectedProduct.orders === 0 || SelectedProduct.orders === undefined ? <p className='text-sm md:text-md text-gray-400'>No ratings yet</p> :
                                    <p className='font-semibold text-gray-400'>{SelectedProduct.orders} Orders</p>
                                }
                                <Circle fill='#dee2e7' stroke='0' size={10} />
                            </span>

                            {SelectedProduct.freeShipping ? <p className='text-sm md:text-md font-semibold text-green-400'>Free Shipping</p> : ''}
                        </div>
                        <div className='bg-red-100 p-4 flex gap-4 rounded-lg'>
                            <h2 className='text-2xl font-semibold'>Price:</h2>
                            <h2 className='text-2xl font-bold line-through text-red-700'>RS {SelectedProduct.price + parseInt(SelectedProduct.price / 3)}</h2>
                            <h2 className='text-3xl font-extrabold '>RS {SelectedProduct.price}</h2>


                        </div>
                        <div className='flex  gap-4 flex-col justify-center items-center w-full '>
                            <div className='flex items-center gap-4  w-full'>
                                <QuantityInput />
                                <button
                                    onClick={() => handleAddcart(SelectedProduct)}
                                    className='bg-white-600 text-blue-600 font-semibold w-full py-3 px-8 border-2 border-gray-300 rounded-lg hover:bg-blue-700 hover:text-white hover:border-blue-700 cursor-pointer transition '>Add to Cart</button>

                            </div>
                            <div className='flex items-center gap-4  w-full'>
                                <button
                                    onClick={() => handleBuyNow(SelectedProduct)}
                                    className='bg-blue-600 font-semibold   text-white w-full py-3 px-8 cursor-pointer rounded-lg border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition '>Buy Now</button>
                                <button className='bg-green-400 text-white font-semibold w-full py-3 px-8 border-2 cursor-pointer border-green-400 rounded-lg hover:bg-green-700 hover:text-white hover:border-green-700 transition '>Contact</button>
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
                                <p className='flex-2'> Metalic, Glass</p>
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


                </div>
                <div className='flex gap-2'>
                    <div className='hidden md:flex bg-white border border-gray-200  rounded-lg shadow-md p-4'>
                        <p>{SelectedProduct.description} <br></br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsam perspiciatis inventore officiis? Voluptas vel repudiandae atque, quod reiciendis consequatur odiotur quo aliquid eius dolorem, provident dolores voluptatem ducimus deserunt quod ipsum odio architecto itaque? Delectus est at dolor?</p>
                    </div>
                    <div className=''><SuggestedProducts /></div>
                </div>
                <div><RelatedProducts category={SelectedProduct.category} /></div>
            </div>
        </QuantityContext.Provider>
    )
}
