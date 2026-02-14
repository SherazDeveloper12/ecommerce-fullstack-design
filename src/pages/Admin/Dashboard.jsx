import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchAllOrders } from '../../store/slices/order';
import { FetchPendingRevenue, setLiveUsers, setLiveUsersCount, setLiveUsersCountlast60min } from '../../store/slices/admin';
import { title } from 'motion/react-client';
import Chart from '../../components/Chart/Chart';
import { socket } from '../../lib/socket';
import LineChart from '../../components/Chart/LineChart/LineChart';
export default function Dashboard() {
  const { Products } = useSelector((state) => state.products)
  const { pendingRevenue, liveUsers, liveUsersCount, liveUsersCountlast60min } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
 
  const { orders } = useSelector((state) => state.order);
  const cardsdata = [
    {
      title: 'Live Users',
      value: liveUsers,
    },
    {
      title: 'Total Products',
      value: Products.length,
    },
    {
      title: 'Total Orders',
      value: orders.length,
    },
    {
      title: 'Total Revenue',
      value: 0,
    },
    {
      title: 'Pending Orders',
      value: 0,
    },
    {
      title: 'Pending Revenue',
      value: pendingRevenue,
    }
  ]
  const getLast7DaysOrders = () => {
    const last7Days = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const dateString = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const ordersCount = orders.filter(order => {
        const orderDate = new Date(order.createdAt);
        return orderDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) === dateString;
      }).length;
      last7Days.push(ordersCount);
    }
    return last7Days;
  }
  // getearnings for last 7 days
  const getLast7DaysEarnings = () => {
    const last7DaysEarnings = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const dateString = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const earnings = orders.filter(order => {
        const orderDate = new Date(order.createdAt);
        return orderDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) === dateString;
      }).reduce((total, order) => total + order.payableAmount, 0);
      last7DaysEarnings.push(earnings);
    }
    return last7DaysEarnings;
  }
  return (
    <div className='flex flex-col p-4 w-full'>
      <h2 className='text-xl font-semibold text-gray-400'>Dashboard</h2>

      <div className='flex justify-start items-center gap-2 flex-wrap'>
       <div className='w-72 md:w-86 bg-white rounded-2xl flex gap-4 p-4 flex-wrap flex-col'>
          <h2 className='font-bold'>Orders in Last 7 Days</h2>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <div className='size-4 bg-amber-300 rounded-full  flex justify-center items-center'>
                <div className='size-4 bg-amber-500 animate-ping rounded-full'></div>
              </div>
              <p>Orders</p>
            </div>
            <p className='text-amber-500 font-semibold'>({getLast7DaysOrders().reduce((a, b) => a + b, 0)})</p>
          </div>
          <LineChart data={getLast7DaysOrders()} />
        </div>
       
        <div className='w-72 md:w-86 bg-white rounded-2xl flex gap-4 p-4 flex-wrap flex-col'>
          <h2 className='font-bold'>Earnings in Last 7 Days</h2>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <div className='size-4 bg-amber-300 rounded-full  flex justify-center items-center'>
                <div className='size-4 bg-amber-500 animate-ping rounded-full'></div>
              </div>
              <p>Earnings</p>
            </div>
            <p className='text-amber-500 font-semibold'>({getLast7DaysEarnings().reduce((a, b) => a + b, 0)})</p>
          </div>
          <Chart data={getLast7DaysEarnings()} />
        </div>
        <div className='w-72 md:w-86 bg-white rounded-2xl flex gap-4 p-4 flex-wrap flex-col'>
          <h2 className='font-bold'>Live Users in last 60 Sec</h2>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <div className='size-4 bg-amber-300 rounded-full  flex justify-center items-center'>
                <div className='size-4 bg-amber-500 animate-ping rounded-full'></div>
              </div>
              <p>Live Users</p>
            </div>
            <p className='text-amber-500 font-semibold'>({liveUsers})</p>
          </div>
          <Chart last60sec={true} data={liveUsersCount} />
        </div>
        <div className='w-72 md:w-86 bg-white rounded-2xl flex gap-4 p-4 flex-wrap flex-col'>
          <h2 className='font-bold'>Live Users in last 60 Minutes</h2>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <div className='size-4 bg-amber-300 rounded-full  flex justify-center items-center'>
                <div className='size-4 bg-amber-500 animate-ping rounded-full'></div>
              </div>
              <p>Live Users</p>
            </div>
            <p className='text-amber-500 font-semibold'>({liveUsers})</p>
          </div>
          <Chart last60min={true} data={liveUsersCountlast60min} />
        </div>
       
      </div>
    </div>
  )
}

