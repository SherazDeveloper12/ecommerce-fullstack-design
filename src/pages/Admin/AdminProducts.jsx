import React from 'react'
import SelectionWithAddNew from '../../components/Selection/Selection';
import Selection from '../../components/Selection/Selection';
import RadioInput from '../../components/Radio/RadioInput';
import { useState } from 'react';
export default function AdminProducts() {
  const categories = ['electronics', 'fashion', 'home-appliances', 'books', 'sports'];
  const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony'];
  const handleSelectionChange = (value) => {
    console.log('Selected Category in AdminProducts:', value);
  }
  const [category, setcategory] = React.useState('');
  const [brand, setbrand] = React.useState('');
  const [condition, setcondition] = React.useState('');
  const [freeShipping, setfreeShipping] = useState(true);
  const [newArrivals, setnewArrivals] = useState(false);
 const [title, settitle] = useState('');
 const [heading, setheading] = useState('');
 const [price, setprice] = useState(0);
 const [quantity, setquantity] = useState(0);
 const [description, setdescription] = useState('');
  const product = {
    title: title,
    heading: heading,
    price: price,
    freeShipping: freeShipping,
    newArrivals: newArrivals,
    quantity: quantity,
    description: description,
    category: category,
    brand: brand,
    condition: condition,
  }
console.log(product);
  return (
    <div className='p-2 flex flex-col gap-2 w-full'>
      <h2 className='text-2xl text-gray-500 font-semibold '>Products</h2>
      <div className='border border-gray-300 rounded-lg p-4 flex gap-4 w-full'>
        <div className='flex-1'> image</div>
        <div className='flex-1'>
          <label htmlFor="ProductTitle" className='font-semibold'>Enter Product Title:</label>
          <input type="text" id="ProductTitle" placeholder='i.e Iphone 8 Plus' name="ProductTitle" className="bg-white border border-gray-300 rounded p-1 w-full" onChange={(e)=>settitle(e.target.value)} />
          <label htmlFor="ProductHeading" className='font-semibold'>Enter Product Heading:</label>
          <input type="text" id="ProductHeading" placeholder='i.e Iphone 8 Plus 64GB Factory Unlocked' name="ProductHeading" className="bg-white border border-gray-300 rounded p-1 w-full" onChange={(e)=>setheading(e.target.value)} />
          <div className='flex gap-2 '>
            <div className='flex-1'>
              <label htmlFor="ProductPrice" className='font-semibold'>Enter Product Price:</label>
              <input type="text" id="ProductPrice" placeholder='i.e 699' name="ProductPrice" className="bg-white border border-gray-300 rounded p-1 w-full" onChange={(e)=>setprice(e.target.value)} />
            </div>
            <div className='flex-1'>
              <label htmlFor="ProductQuantity" className='font-semibold'>Enter Product Quantity:</label>
              <input type="text" id="ProductQuantity" placeholder='i.e 12' name="ProductQuantity" className="bg-white border border-gray-300 rounded p-1 w-full" onChange={(e)=>setquantity(e.target.value)} />
            </div>
          </div>
          <label htmlFor="ProductDescription" className='font-semibold'>Enter Product Description:</label>
          <textarea id="ProductDescription" placeholder='i.e This is a great phone with...' name="ProductDescription" className="bg-white border border-gray-300 rounded p-1 w-full" rows={12} onChange={(e)=>setdescription(e.target.value)} />
        </div>
        <div className='flex-1'>
          <div>
            <p className='font-semibold'>Tick if  given service is true for this product:</p>
            <div className='flex gap-4 items-center '>
              <input type="checkbox" className="size-4" id='FreeShipping' defaultChecked onChange={(e)=>setfreeShipping(e.target.checked)} />
              <label htmlFor="FreeShipping" >Free Shipping Available</label>
            </div>
            <div className='flex gap-4 items-center '>
              <input type="checkbox" className="size-4" id='NewArrivals' onChange={(e)=>setnewArrivals(e.target.checked)} />
              <label htmlFor="NewArrivals" >New Arrivals</label>
            </div>
          </div>
          <Selection options={categories} name="category" value={(value) => setcategory(value)} />
          <Selection options={brands} name="Brand" value={(value) => setbrand(value)} />
          <RadioInput options={["New", "Used", "Refurbished"]} name="Condition" value={(value) => setcondition(value)} />
          <button className='bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-600'>Add Product</button>
        </div>
      </div>
    </div>
  )
}



