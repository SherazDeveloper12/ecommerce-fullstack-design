import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home';

export default function Navigation() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
    ]);
  return (
   <RouterProvider router={router} />
  )
}
