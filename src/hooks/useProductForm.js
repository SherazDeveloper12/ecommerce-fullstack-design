import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../store/slices/product";
import { useNavigate, useParams } from 'react-router';
import { nav } from "motion/react-m";



export default function useProductForm() {
    const navigate = useNavigate();
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
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const {id} = useParams()
    const products = useSelector((state) => state.products.Products)
    const existingProduct = products.find(prod => prod._id === id);
    if (existingProduct && id) {

        useEffect(() => {
            setcategory(existingProduct.category);
            setbrand(existingProduct.brand);
            setcondition(existingProduct.condition);
            setfreeShipping(existingProduct.freeShipping);
            setnewArrivals(existingProduct.newArrival);
            settitle(existingProduct.title);
            setheading(existingProduct.heading);
            setprice(existingProduct.price);
            setquantity(existingProduct.quantity);
            setdescription(existingProduct.description);
            setimages(existingProduct.img);
            setEditMode(true);
        }, []);
    }
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
    const handleUpdateProductClick = (product) => {
        console.log('Updating product:', product);
        const updatedProduct = { ...product, _id: existingProduct._id };
        // Dispatch update action here
        dispatch(updateProduct(updatedProduct));
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
        navigate('/admin/products');
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
        handleAddProductClick,
        editMode,
        handleUpdateProductClick
    }
};
