import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../store/slices/product'

export default function useAdminProductsPage() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.Products)
    const status = useSelector((state) => state.products.status)
   const handledelete = (id) => {
    dispatch(deleteProduct(id))
   }
  return {
    products,
    handledelete,
    status
  }
}
