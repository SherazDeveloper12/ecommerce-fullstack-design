
import React from 'react'
import { Star, Circle, Heart, Square, RectangleHorizontal, X } from 'lucide-react'
import DropDown from '../components/DropDown/DropDown'
import NewsLetterSubscription from '../components/NewsLetterSubscription/NewsLetterSubscription'
import Stars from '../components/Stars/Stars'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedProduct, setFilters, clearFilters } from '../store/slices/product'
import { useNavigate } from 'react-router'
import { animate, motion } from 'framer-motion'

export default function Products() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch();
    const links = [
        {
            name: 'Mobile accessory',
            route: '/mobile-accessory'
        },
        {
            name: 'Electronics',
            route: '/electronics'
        },
        {
            name: 'Smartphones ',
            route: '/smartphones'
        },
        {
            name: 'Modern tech',
            route: '/modern-tech'
        },
    ]

    const products = useSelector((state) => state.products.Products);
    let DisplayProducts = products;
    console.log('All Products:', DisplayProducts);
    const filters = useSelector((state) => state.products.Filters);
    if (filters.length > 0) {
        console.log('Filters applied:', filters);
        filters.forEach(filter => {
            if (filter.type === 'Condition') {
                DisplayProducts = DisplayProducts.filter(product => product.condition === filter.value);
            }
            if (filter.type === 'Brands') {
                let brandFilteredProducts = [];
                filter.value.forEach(brand => {
                    let filtered = DisplayProducts.filter(product => product.brand === brand);
                    brandFilteredProducts = [...brandFilteredProducts, ...filtered];
                });
                DisplayProducts = brandFilteredProducts;
            }
            if (filter.type === 'Rating') {
                let ratingFilteredProducts = [];
                filter.value.forEach(rating => {
                    let filtered = DisplayProducts.filter(product => Math.floor(product.rating) === rating);
                    ratingFilteredProducts = [...ratingFilteredProducts, ...filtered];
                });
                DisplayProducts = ratingFilteredProducts;
            }
            if (filter.type === 'Features') {
                let featureFilteredProducts = [];
                filter.value.forEach(feature => {
                    let filtered = DisplayProducts.filter(product => product.features.includes(feature));
                    featureFilteredProducts = [...featureFilteredProducts, ...filtered];
                });
                DisplayProducts = featureFilteredProducts;
            }
        });
    }
    const handlecancelfilterclick = (filter) => {
        const payload = { type: filter.type, value: filter.value, checked: false };
        console.log("cancel payload", payload);
        dispatch(setFilters(payload));
    }
    const handleClearAllFilters = () => {
        dispatch(clearFilters());
    }
    const handleproductclick = (product) => {
        dispatch(addSelectedProduct(product));
        navigate(`/products/${product._id}`);
    }
    return (
        <div className=''>
            <div className='flex max-w-7xl mx-auto gap-4 pt-4'>
                <div className='flex-1 flex flex-col gap-4 '>
                    <DropDown Links={links} heading='All Categories' />

                    <DropDown CheckboxName={['OnePlus', 'HyperX', 'Apple', 'Canon', 'Lenovo']} heading='Brands' />
                    <DropDown CheckboxName={['Metallic', 'Plastic', 'Leather', 'Wood', 'Glass']} heading='Features' />
                    <DropDown PriceRange={[0, 20000]} heading='Price Range' />
                    <DropDown RadioName={['Any', 'Refurbished', 'New', 'Used']} heading='Condition' />
                    <DropDown Rating={true} heading='Rating' />
                </div>
                <div className='flex-4 flex flex-col gap-4 '>
                    <div className='bg-white p-2  border border-gray-300 flex justify-between items-center'>
                        <div className='flex gap-1'>
                            <p>Total Products available are</p>
                            <p className='font-semibold'> {DisplayProducts.length}</p> </div>
                        <div className='flex  items-center border border-gray-100 cursor-pointer border-collapse rounded-lg'>
                            <div className={`flex flex-col p-1 border border-gray-200 cursor-pointer border-collapse ${isOpen && 'bg-[#f7fafc]'}`} onClick={() => setIsOpen(true)}>
                                <div className='flex '>
                                    <Square size={12} fill='black' />
                                    <Square size={12} fill='black' />
                                </div>
                                <div className='flex '>
                                    <Square size={12} fill='black' />
                                    <Square size={12} fill='black' />
                                </div>
                            </div>
                            <div className={`flex flex-col gap-1.5 p-1 border border-gray-200 cursor-pointer border-collapse ${!isOpen && 'bg-[#f7fafc]'}`} onClick={() => setIsOpen(false)}>
                                <div className='bg-black px-3 py-0.5'></div>
                                <div className='bg-black px-3 py-0.5'></div>
                                <div className='bg-black px-3 py-0.5'></div>

                            </div>
                        </div>
                    </div>
                    <div className='flex  gap-4 items-center flex-wrap'>
                        {filters.map((filter, index) => (
                            <div key={index} className='flex gap-2 bg-white border border-blue-500  rounded-lg px-2 py-1 items-center'>

                                {Array.isArray(filter.value) ? filter.value.map((val, i) => (
                                    <div className='flex gap-4 items-center '>
                                        <div className='flex justify-between gap-2 items-center font-semibold'><span>{val}</span>  <X size={16} className='cursor-pointer text-blue-500' onClick={() => handlecancelfilterclick(filter)} /></div></div>
                                )) : <div className='flex justify-between gap-2 items-center font-semibold'><span>{filter.value}</span>  <X size={16} className='cursor-pointer text-blue-500' onClick={() => handlecancelfilterclick(filter)} /></div>}
                            </div>
                        ))}
                        {filters.length > 0 && <p className='cursor-pointer text-blue-500 font-semibold' onClick={handleClearAllFilters}>Clear all filters</p>}
                    </div>


                    {isOpen ?
                        <div className='grid grid-cols-3 gap-4 overflow-hidden p-1'>
                            {DisplayProducts.map((product, index) => (
                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { duration: 0.3 },
                                    }}
                                    key={index}
                                    className='cursor-pointer flex flex-col gap-2 bg-white rounded-lg border overflow-hidden border-gray-300 hover:shadow-md p-4 relative' id={index}
                                    onClick={() => handleproductclick(product)}>
                                    {product.NewArrival && <NewArrival  />}
                                    <div className='flex-4'>
                                        <img src={product.img} alt={product.title} className='mx-auto' />
                                    </div>
                                    <div className='flex-1 border-t border-gray-200 pt-2 flex flex-col gap-1 relative'>
                                        <div className='flex justify-center items-center rounded-lg border border-blue-600 p-2 absolute top-4 right-4 cursor-pointer'>
                                            <Heart color='blue' />
                                        </div>
                                        <div className='flex gap-4'>
                                            <p className='font-semibold'>${product.price}.00</p>
                                            <p className='text-gray-500 line-through'>$1128.00</p>
                                        </div>
                                        <Stars rating={product.rating} />
                                        <h1 className='font-semibold text-gray-500 '>{product.heading}</h1>
                                        <h1 className='font-semibold text-gray-500 '>Category - {product.category}</h1>
                                    </div>
                                </motion.div>))}
                        </div>
                        :
                        <>

                            {DisplayProducts.map((product, index) => (
                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { duration: 0.3 },
                                    }} 
                                    className='flex gap-4 bg-white rounded-lg border border-gray-300 cursor-pointer relative overflow-hidden' id={index}
                                    onClick={() => handleproductclick(product)}>
                                        {product.NewArrival && <NewArrival className=" text-xs -left-8 top-4 " />}
                                    <div className='flex-1 flex justify-center items-center'>
                                        <img src={product.img} alt={product.title} />
                                    </div>
                                    <div className='flex-3 flex flex-col gap-3 p-4 relative bg-white'>
                                        <h1>{product.heading}</h1>
                                        <div>
                                            <div className='flex gap-4'>
                                                <p className='font-semibold'>${product.price}.00</p>
                                                <p className='text-gray-500 line-through'>$1128.00</p>
                                            </div>
                                            <div className='flex gap-2'>
                                                <Stars rating={product.rating} />
                                                <span className='text-[#dee2e7] flex gap-2 justify-center items-center'>
                                                    <Circle fill='#dee2e7' stroke='0' size={10} />
                                                    <p className='font-semibold text-gray-400'>{product.orders} Orders</p>
                                                    <Circle fill='#dee2e7' stroke='0' size={10} />
                                                </span>
                                                {product.freeShipping ? <p className='font-semibold text-green-400'>Free Shipping</p> : ''}
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 pr-32'>{product.description}</p>
                                        </div>
                                        <a href="#" className='text-blue-400 font-semibold'>View Details</a>
                                        <div className='flex justify-center items-center rounded-lg border border-blue-600 p-2 absolute top-4 right-4 cursor-pointer'>
                                            <Heart color='blue' />
                                        </div>
                                    </div>
                                </motion.div >))}
                        </>
                    }

                </div >
            </div>
            <NewsLetterSubscription />
        </div>
    )
}



function NewArrival({ className }) {
    return (
        <div
            className={`absolute -rotate-45 bg-red-500 text-white font-semibold px-8 py-1 text-sm shadow-lg ${className ? className : 'top-6.5 -left-8'}`}>
            New Arrival
        </div>
    )
}