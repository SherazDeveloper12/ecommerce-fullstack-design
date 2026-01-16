import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home.jsx';
import Products from '../pages/Products.jsx';
import CoreLayout from '../layouts/CoreLayout.jsx';
import Product from '../pages/Product.jsx';
import About from '../pages/About.jsx';
import Sale from '../pages/Sale.jsx';
import Help from '../pages/Help.jsx';
import Suppliers from '../pages/Suppliers.jsx';
import Dashboard from '../pages/Admin/Dashboard.jsx';
import AdminLayout from '../layouts/AdminLayout.jsx';
import Admin from '../pages/Admin/Admin.jsx';
import AddProducts from '../pages/Admin/AddProducts.jsx';
import AdminProducts from '../pages/Admin/AdminProducts.jsx';
export default function Navigation() {
    const router = createBrowserRouter([
        {
            element: <CoreLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/products",
                    element: <Products />
                },
                {
                    path: `/products/:id`,
                    element: <Product />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/sales",
                    element: <Sale />
                },
                {
                    path: "/help",
                    element: <Help />
                },
                
            ],
        },
         {
                    path: "/admin",
                    element: <Admin />
                },
        {
            element: <AdminLayout />,
            children: [
                {
                    path: "/admin/dashboard",
                    element: <Dashboard />
                },
                {
                    path: "/admin/add-products",
                    element: <AddProducts />
                },
                {
                    path: "/admin/products",
                    element: <AdminProducts />
                }
            ]
        }

    ]);
    return (
        <RouterProvider router={router} />
    )
}
