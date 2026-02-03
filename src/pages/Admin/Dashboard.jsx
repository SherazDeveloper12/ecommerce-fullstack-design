import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchAllOrders } from '../../store/slices/order';
import { FetchPendingRevenue } from '../../store/slices/admin';

export default function Dashboard() {
  const {Products } = useSelector((state) => state.products)
  const {pendingRevenue} = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchAllOrders())
    dispatch(FetchPendingRevenue())
  }, [])
  const {orders} = useSelector((state) => state.order);
  const cardsdata = [
    {
      title: 'Total Products',
      value: Products.length,
    },
    {
      title: 'Total Orders',
      value: orders.length,
    },
    {
      title: 'Pending Revenue',
      value: pendingRevenue,
    }
  ]
  return (
    <div className='p-2'>
      <h1>Admin Dashboard</h1>
      <div className='flex gap-4 p-4'>{cardsdata.map((card, index) => (
        <Card key={index} title={card.title} value={card.value} />
      ))}</div>
    </div>
  )
}

const Card = ({title, value}) => {
  return(
<div className='size-56 flex flex-col border bg-neutral-200 overflow-hidden border-amber-300 rounded-lg '>
      <div className='w-full h-16 bg-amber-500 card flex justify-center items-center'>
       <p className='text-2xl font-semibold text-amber-800' > {title}</p>
      </div>
      <div className='flex justify-center items-center h-full'>
        <p className='font-semibold text-8xl text-amber-500'>{value}</p>
      </div>
      </div>
  )
}