import { create, nav } from 'motion/react-m';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router';
import { createOrder } from '../store/slices/order';
import { clearCart } from '../store/slices/cart';
import { socket } from '../lib/socket';
export default function Checkout() {
    const items = useSelector((state) => state.cart.items)
    const [SameBillingAddress, setSameBillingAddress] = useState(true);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [city, setCity] = useState('');
    const [stateProvince, setStateProvince] = useState('');
    const [postalZipCode, setPostalZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [billingFullName, setBillingFullName] = useState('');
    const [billingAddressLine1, setBillingAddressLine1] = useState('');
    const [billingCity, setBillingCity] = useState('');
    const [billingStateProvince, setBillingStateProvince] = useState('');
    const [billingPostalZipCode, setBillingPostalZipCode] = useState('');
    const [billingCountry, setBillingCountry] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('COD');
    const [popupVisible, setPopupVisible] = useState(false);
    const {user, tempID} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
       const { status, error } = useSelector((state) => state.order);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const orderDetails = {
            username: user ? user.username : `Guest`,
            userid: user ? user._id : tempID,
            email,
            phoneNumber,
            shippingAddress: {
                fullName,
                addressLine1,
                city,
                stateProvince,
                postalZipCode,
                country,
            },
            billingAddress: SameBillingAddress ? {
                fullName,
                addressLine1,
                city,
                stateProvince,
                postalZipCode,
                country,
            } : {
                fullName: billingFullName,
                addressLine1: billingAddressLine1,
                city: billingCity,
                stateProvince: billingStateProvince,
                postalZipCode: billingPostalZipCode,
                country: billingCountry,
            },
            paymentMethod,
            items,
           
        };
        dispatch(createOrder(orderDetails));
        socket.emit('newOrder', orderDetails);
        
        setEmail('');
        setPhoneNumber('');
        setFullName('');
        setAddressLine1('');
        setCity('');
        setStateProvince('');
        setPostalZipCode('');
        setCountry('');
        setBillingFullName('');
        setBillingAddressLine1('');
        setBillingCity('');
        setBillingStateProvince('');
        setBillingPostalZipCode('');
        setBillingCountry('');
        setPaymentMethod('COD');
        
    };
    useEffect(() => {
            if (status === 'succeeded') {
                toast.dismiss();
                toast.success('Order placed successfully!');
                dispatch(clearCart());
                navigate('/' , {replace:true} );
            }
            else if (status === 'loading') {
                toast.loading('Placing order...');
            }
            else if (status === 'failed') {
                toast.dismiss();
                toast.error(`${error}`);
            }
        }, [status, error]);


    return (
        <div className='flex flex-col '>
            <div
            onClick={()=>navigate("/")}
             className='text-2xl cursor-pointer text-blue-400 font-bold p-4 bg-white border-b pl-18 border-gray-300'>Brand Store</div>
          
          
            <div className=' flex md:flex-row flex-col-reverse'>
            <Toaster position="top-right" richColors />
                <div className='flex-1 bg-white flex flex-col gap-3 p-8'>
                    <h2 className='text-2xl font-bold mb-4'>Shipping Information</h2>
                     <form 
                     onSubmit={handlePlaceOrder}>
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>Contact</h2>
                        <input type='email' required placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='border border-gray-300 rounded p-2 w-full mb-3 bg-[#f9fafb] ' />
                        <input type='text' required placeholder='Phone Number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className='border border-gray-300 rounded p-2 w-full mb-3 bg-[#f9fafb] ' />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>Shipping Address</h2>
                        <input type='text' required placeholder='Full Name' value={fullName} onChange={(e)=>setFullName(e.target.value)} className='border border-gray-300 rounded p-2 w-full mb-3 bg-[#f9fafb] ' />
                        <input type='text' required placeholder='Address Line 1' value={addressLine1} onChange={(e)=>setAddressLine1(e.target.value)} className='border border-gray-300 rounded p-2 w-full mb-3 bg-[#f9fafb] ' />
                        <div className='flex gap-3 mb-3'>
                            <input type='text' required placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)} className='border border-gray-300 rounded p-2 w-full bg-[#f9fafb] ' />
                            <input type='text' required placeholder='State/Province' value={stateProvince} onChange={(e)=>setStateProvince(e.target.value)} className='border border-gray-300 rounded p-2 w-full bg-[#f9fafb] ' />
                        </div>
                        <input type='text' required placeholder='Postal/Zip Code' value={postalZipCode} onChange={(e)=>setPostalZipCode(e.target.value)} className='border border-gray-300 rounded p-2 w-full mb-3 bg-[#f9fafb] ' />
                        <input type='text' required placeholder='Country' value={country} onChange={(e)=>setCountry(e.target.value)} className='border border-gray-300 rounded p-2 w-full mb-3 bg-[#f9fafb] ' />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>Billing Address</h2>
                        <input type="checkbox" id='SameAsShippingAddress' defaultChecked={SameBillingAddress} onChange={() => setSameBillingAddress(!SameBillingAddress)} />
                        <label htmlFor='SameAsShippingAddress' className='ml-2'>Same as shipping address</label>
                        {!SameBillingAddress && (
                            <div className='mt-3'>
                                <input type='text' required placeholder='Full Name' value={billingFullName} onChange={(e)=>setBillingFullName(e.target.value)} className='border border-gray-300 rounded p-2 w-full mb-3 bg-[#f9fafb] ' />
                                <input type='text' required placeholder='Address Line 1' value={billingAddressLine1} onChange={(e)=>setBillingAddressLine1(e.target.value)} className='border border-gray-300 rounded p-2 w-full mb-3 bg-[#f9fafb] ' />
                                <div className='flex gap-3 mb-3'>
                                    <input type='text' required placeholder='City' value={billingCity} onChange={(e)=>setBillingCity(e.target.value)} className='border border-gray-300 rounded p-2 w-full bg-[#f9fafb] ' />
                                    <input type='text' required placeholder='State/Province' value={billingStateProvince} onChange={(e)=>setBillingStateProvince(e.target.value)} className='border border-gray-300 rounded p-2 w-full bg-[#f9fafb] ' />
                                </div>
                                <input type='text' required placeholder='Postal/Zip Code' value={billingPostalZipCode} onChange={(e)=>setBillingPostalZipCode(e.target.value)} className='border border-gray-300 rounded
                                    p-2 w-full mb-3 bg-[#f9fafb] ' />
                                <input type='text' required placeholder='Country' value={billingCountry} onChange={(e)=>setBillingCountry(e.target.value)} className='border border-gray-300 rounded p-2 w-full mb-3 bg-[#f9fafb] ' />
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>Payment Method</h2>
                        <div className='flex justify-start items-center gap-6'>
                            <div>
                                <input type="radio" id='COD' name='paymentMethod' defaultChecked onChange={() => setPaymentMethod('COD')} className='mr-2' />
                                <label htmlFor='COD'>Cash on Delivery</label>
                            </div>
                            <div>
                                <input type="radio" id='PayNow' name='paymentMethod' onChange={() => setPaymentMethod('PayNow')} className='mr-2' />
                                <label htmlFor='PayNow'>Pay Now Online</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button 
                        type="submit"
                        className='bg-blue-500 text-white px-4 py-2 rounded w-full cursor-pointer hover:bg-blue-700 mt-4'>Place Order</button>
                    </div>
                    </form>
                </div>
                <div className='flex-1 p-8'>
                    {items.length === 0 ? (
                        <div className='text-center text-gray-500'>Your cart is empty.</div>
                    ) : (
                        <div className='flex flex-col gap-3 pb-3'>
                            <h2 className='text-2xl font-bold mb-4'>Checkout</h2>
                            <ul className='flex flex-col gap-4'>
                                {items.map((item) => (
                                    <li key={item.product._id} className='flex gap-3  '>
                                        <div className='flex-1'>
                                            <img
                                                src={item.product.img[0]}
                                                alt={item.product.title}
                                                className='w-20 h-20 object-cover border border-gray-300 rounded'
                                            />
                                        </div>
                                        <div className='flex-3'>
                                            <div className='font-semibold'>{item.product.heading}</div>
                                            <div>Quantity: {item.quantity}</div>

                                        </div>
                                        <div className='flex-2'>  {item.product.price} PKR</div>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <div className=''>
                                    <div className='flex justify-between items-center'>
                                        <p>Total Items:</p>
                                        <p> {items.reduce((total, item) => total + item.quantity, 0)}</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p>Total Items Cost: </p>
                                        <p>{items.reduce((total, item) => total + item.product.price * item.quantity, 0)} PKR</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p>Delievery Charges: </p>
                                        <p> 499 PKR</p>
                                    </div>
                                    <div className='flex justify-between items-center font-semibold text-lg'>
                                        <p>Total Payable Ammount: </p>
                                        <p>{items.reduce((total, item) => total + item.product.price * item.quantity, 0) + 499} PKR</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p>Payment Status: </p>
                                        <p>Unpaid</p>
                                    </div>
                                </div>

                            </div>
                            {/* <div className='flex items-center gap-4'>
                                <input type='text' placeholder='Apply Coupon' className='border border-gray-300 rounded p-2 flex-3 bg-white ' />
                                <button className='bg-green-500 text-white px-4 py-2 rounded flex-1 cursor-pointer hover:bg-green-700'>Apply</button>
                            </div> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
