import React from 'react'
import Selection from '../../components/Selection/Selection';
import RadioInput from '../../components/Radio/RadioInput';
import useProductForm from '../../hooks/useProductForm';
import ImageUploader from '../../components/ImageUploader/ImageUploader';

import { X } from 'lucide-react';
import { brands , categories} from '../../lib/constant';
export default function AddProducts() {
  
  

  const { category,
    setcategory,
    brand,
    setbrand,
    condition,
    setcondition,
    freeShipping,
    setfreeShipping,
    newArrivals,
    setnewArrivals,
    title,
    settitle,
    heading,
    setheading,
    price,
    setprice,
    quantity,
    setquantity,
    description,
    setdescription,
    images,
    setimages,
    product,
    handleAddProductClick,
    editMode,
    handleUpdateProductClick
  } = useProductForm();


  return (
    <div className='p-2 flex flex-col gap-2 w-full'>
            <h2 className='text-xl font-semibold text-gray-400'>Add Products</h2>
      <div className='bg-white border border-gray-300 rounded-lg p-4 flex gap-4 w-full'>
        <div className='flex-1'>
          <ImageUploader value={images[images.length - 1]} setValue={(value) => setimages(prevImages => [...prevImages, value])} />
          <div>
            <p className='font-semibold mt-2'>Uploaded Images:</p>
            <div className='flex gap-2 mt-1 flex-wrap '>
              {images.map((img, index) => (
                <div className='relative'>
                  <X className='cursor-pointer text-black absolute top-0 right-0' onClick={() => { setimages(images.filter((_, i) => i !== index)); }} />
                  <img key={index} src={img} alt={`Uploaded ${index}`} className="w-20 h-20 object-cover border border-gray-300 rounded" />
                </div>))}
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <label htmlFor="ProductTitle" className='font-semibold'>Enter Product Title:</label>
          <input type="text" id="ProductTitle" placeholder='i.e Iphone 8 Plus' name="ProductTitle" className="bg-white border border-gray-300 rounded p-1 w-full" onChange={(e) => settitle(e.target.value)} value={title} />
          <label htmlFor="ProductHeading" className='font-semibold'>Enter Product Heading:</label>
          <input type="text" id="ProductHeading" placeholder='i.e Iphone 8 Plus 64GB Factory Unlocked' name="ProductHeading" className="bg-white border border-gray-300 rounded p-1 w-full" onChange={(e) => setheading(e.target.value)} value={heading} />
          <div className='flex gap-2 '>
            <div className='flex-1'>
              <label htmlFor="ProductPrice" className='font-semibold'>Enter Product Price:</label>
              <input type="number" id="ProductPrice" placeholder='i.e 699' name="ProductPrice" value={price} className="bg-white border border-gray-300 rounded p-1 w-full" onChange={(e) => setprice(e.target.value)}  />
            </div>
            <div className='flex-1'>
              <label htmlFor="ProductQuantity" className='font-semibold'>Enter Product Quantity:</label>
              <input type="number" id="ProductQuantity" placeholder='i.e 12' name="ProductQuantity" min={1} value={quantity} className="bg-white border border-gray-300 rounded p-1 w-full" onChange={(e) => setquantity(e.target.value)} />
            </div>
          </div>
          <label htmlFor="ProductDescription" className='font-semibold'>Enter Product Description:</label>
          <textarea id="ProductDescription" placeholder='i.e This is a great phone with...' name="ProductDescription" className="bg-white border border-gray-300 rounded p-1 w-full" rows={12} onChange={(e) => setdescription(e.target.value)} value={description} />
        </div>
        <div className='flex-1'>
          <div>
            <p className='font-semibold'>Tick if  given service is true for this product:</p>
            <div className='flex gap-4 items-center '>
              <input type="checkbox" className="size-4" id='FreeShipping'  onChange={(e) => setfreeShipping(e.target.checked)} checked={freeShipping} />
              <label htmlFor="FreeShipping" >Free Shipping Available</label>
            </div>
            <div className='flex gap-4 items-center '>
              <input type="checkbox" className="size-4" id='NewArrivals' onChange={(e) => setnewArrivals(e.target.checked)} checked={newArrivals} />
              <label htmlFor="NewArrivals" >New Arrivals</label>
            </div>
          </div>
          <Selection options={categories} name="category" setValue={(value) => setcategory(value)} value={category} />
          <Selection options={brands} name="Brand" setValue={(value) => setbrand(value)} value={brand} />
          <RadioInput options={["New", "Used", "Refurbished"]} name="Condition" setValue={(value) => setcondition(value)}  value={condition} />
          <button className='bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-600' onClick={editMode ? () => {handleUpdateProductClick(product)} :  () => handleAddProductClick(product)}>{editMode ? "Update Product" : "Add Product"}</button>
        </div>
      </div>
    </div>
  )
}



