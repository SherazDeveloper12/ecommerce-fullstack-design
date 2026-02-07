import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct,  } from '../store/slices/product'
import { useNavigate } from 'react-router'

export default function useAdminProductsPage() {

  const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.Products)
    const status = useSelector((state) => state.products.status)
   const handledelete = (id) => {
    dispatch(deleteProduct(id))
   }
   const handleedit = (id) => {
    
    navigate(`/admin/edit-product/${id}`)
   }
    
  return {
    products,
    handledelete,
    status,
    handleedit
  }
}
