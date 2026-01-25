import React, { use } from 'react'
import { useSelector } from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'
export default function PublicRoute() {
    const user = useSelector((state) => state.auth.user)
    if(user){
        return <Navigate to="/" />
    }
  return (
    <Outlet />
  )
}
