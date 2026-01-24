import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
export default function ProtectedRoute() {
  const { user, token } = useSelector((state) => state.auth);
  if (!user || !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />

}
