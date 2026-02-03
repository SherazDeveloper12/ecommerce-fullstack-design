import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addSelectedProduct, clearFilters, setFilters } from "../store/slices/product";



export default function useProductsPage() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate();
        const [isOpen, setIsOpen] = useState(true);
        const dispatch = useDispatch();
        const products = useSelector((state) => state.products.Products);
    let DisplayProducts = products;
    const filters = useSelector((state) => state.products.Filters);
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
    return {
        BASE_URL,
        navigate,
        isOpen,
        setIsOpen,
        dispatch,
        links,
        products,
        DisplayProducts,
        filters,
        handlecancelfilterclick,
        handleClearAllFilters,
        handleproductclick
    };
}