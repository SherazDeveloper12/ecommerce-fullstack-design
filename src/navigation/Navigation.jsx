import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home.jsx';
import CoreLayout from '../layouts/CoreLayout.jsx';

export default function Navigation() {
    const router = createBrowserRouter([
        {
            element: <CoreLayout/>,
            children: [
                {
            path: "/",
            element: <Home/>
        },]
        }
        
    ]);
  return (
   <RouterProvider router={router} />
  )
}
