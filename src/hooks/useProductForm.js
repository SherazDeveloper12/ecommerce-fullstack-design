import { useState } from "react";



export default function useProductForm() {
    const [category, setcategory] = useState('');
    const [brand, setbrand] = useState('');
    const [condition, setcondition] = useState('');
    const [freeShipping, setfreeShipping] = useState(true);
    const [newArrivals, setnewArrivals] = useState(false);
    const [title, settitle] = useState('');
    const [heading, setheading] = useState('');
    const [price, setprice] = useState(0);
    const [quantity, setquantity] = useState(1);
    const [description, setdescription] = useState('');
    const [images, setimages] = useState([]);
    const product = {
        title: title,
        heading: heading,
        price: price,
        images: images,
        freeShipping: freeShipping,
        newArrivals: newArrivals,
        quantity: quantity,
        description: description,
        category: category,
        brand: brand,
        condition: condition,
    };
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
    }
};
