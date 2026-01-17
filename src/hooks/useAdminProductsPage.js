import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, realtimeconnection } from '../store/slices/product'

export default function useAdminProductsPage() {
  const BASE_URL = import.meta.env.VITE_BASE_URL
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.Products)
    const status = useSelector((state) => state.products.status)
   const handledelete = (id) => {
    dispatch(deleteProduct(id))
   }
    
  return {
    products,
    handledelete,
    status,
    
  }
}
