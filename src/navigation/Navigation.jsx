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
import SignUp from '../pages/Auth/SignUp.jsx';
import Forget from '../pages/Auth/Forget.jsx';
import Login from '../pages/Auth/Login.jsx';
import AuthLayout from '../layouts/AuthLayout.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import PublicRoute from './PublicRoute.jsx';
import Checkout from '../pages/Checkout.jsx';
import Orders from '../pages/Orders.jsx';
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
                {
                    path: "/orders",
                    element: <Orders />
                }
                
            ],
        },
        {
                    path: "/checkout",
                    element: <Checkout />
                },
        {
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/admin",
                    element: <Admin />
                },
            ]
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
                    path: "/admin/edit-product/:id",
                    element: <AddProducts />
                },
                {
                    path: "/admin/products",
                    element: <AdminProducts />
                }
            ]
        },
        {
            element: <PublicRoute />,
            children: [
                {
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "/signup",
                            element: <SignUp />
                        },
                        {
                            path: '/login',
                            element: <Login />
                        },
                        {
                            path: '/forget-password',
                            element: <Forget />
                        }
                    ]
                }
            ]
        },


    ]);
    return (
        <RouterProvider router={router} />
    )
}
