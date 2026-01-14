import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../store/slices/product";



export default function useProductForm() {
    const [category, setcategory] = useState('electronics');
    const [brand, setbrand] = useState('Apple');
    const [condition, setcondition] = useState('New');
    const [freeShipping, setfreeShipping] = useState(true);
    const [newArrivals, setnewArrivals] = useState(false);
    const [title, settitle] = useState('');
    const [heading, setheading] = useState('');
    const [price, setprice] = useState(0);
    const [quantity, setquantity] = useState(1);
    const [description, setdescription] = useState('');
    const [images, setimages] = useState([]);
    const dispatch = useDispatch();
    const product = {
        title: title,
        heading: heading,
        price: price,
        img: images,
        freeShipping: freeShipping,
        newArrival: newArrivals,
        quantity: quantity,
        description: description,
        category: category,
        brand: brand,
        condition: condition,
    };
   const handleAddProductClick = (product) => {
        console.log('Adding product:', product);
        dispatch(createProduct(product));
        setbrand('Apple');
        setcategory('electronics');
        setcondition('New');
        setfreeShipping(true);
        setnewArrivals(false);
        settitle('');
        setheading('');
        setprice(0);
        setquantity(1);
        setdescription('');
        setimages([]);
    }
    return {
        category,
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
        handleAddProductClick
    }
};
