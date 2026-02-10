import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetOrdersStatus, setSelectedOrder, updateOrderStatus } from '../../store/slices/order';
import { Toaster, toast } from 'sonner';
import { OrderInvoiceContext } from '../../context/Context';
export default function AdminOrders() {
    const { orders, status, error } = useSelector((state) => state.order);
    const dispatch = useDispatch();
    const reversedOrders = orders.toReversed();
    const [ordercancelationpopup, setOrderCancelationPopup] = useState(false);
    const [orderToCancel, setOrderToCancel] = useState("");
    const { setOrderInvoicePopup } = useContext(OrderInvoiceContext);
    const handleViewClick = (order) => {
        dispatch(setSelectedOrder(order));
        setOrderInvoicePopup(true);
    }
    useEffect(() => {
        if (status === "succeeded") {
            toast.dismiss();
            toast.success("Order status updated successfully");
        }
        else if (status === "loading") {
            toast.loading("Updating order status...");
        }
        else if (status === "failed") {
            toast.dismiss();
            toast.error(`Error updating order status: ${error}`);
        }
        return () => {
            dispatch(resetOrdersStatus());
        }
    }, [status, error]);

    const handleordercancel = (order) => {
        setOrderToCancel(order);
        setOrderCancelationPopup(true);
    }
    const ordercancelconfirmation = () => {
        dispatch(updateOrderStatus({ orderId: orderToCancel._id, newStatus: "Cancelled" }))
        setOrderCancelationPopup(false);
    }
    return (
        <div className='flex flex-col p-4 w-full h-full'>
            <Toaster richColors position='top-right' />
            {ordercancelationpopup ?
                <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center z-50'>
                    <div className='bg-white p-4 rounded-lg shadow-lg w-96'>
                        <h2 className='text-xl font-semibold mb-4'>Cancel Order</h2>
                        <p className='mb-4'>Are you sure you want to cancel this ${orderToCancel.payableAmount} order?</p>
                        <div className='flex justify-end gap-4'>
                            <button
                                onClick={() => setOrderCancelationPopup(false)}
                                className='px-4 cursor-pointer py-2 bg-gray-300 text-gray-700 rounded'>No</button>
                            <button
                                onClick={ordercancelconfirmation}
                                className='px-4 cursor-pointer py-2 bg-red-500 text-white rounded'>Yes</button>
                        </div>
                    </div>
                </div>
                : null}

                
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-semibold text-gray-400'>Orders</h2>
                <div className='flex justify-between items-center'>
                    <h2 className='  text-gray-400'>Total Orders: {orders.length} </h2>

                </div>

            </div>

            <div className='mt-4 bg-white shadow rounded-lg p-4'>
                <table className='w-full table-auto'>
                    <thead>
                        <tr className='bg-gray-100 rounded-t-lg overflow-hidden'>

                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Customer</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Name</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>City</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Country</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Items</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Total</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Status</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Date</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Time</th>
                            <th className='px-4 py-2 text-left text-sm font-medium text-gray-500'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reversedOrders.map((order) => (
                            <tr>

                                <td className='px-4 py-2 border-t text-sm text-gray-700'>{order.username}</td>
                                <td className='px-4 py-2 border-t text-sm text-gray-700'>{order.shippingAddress.fullName}</td>
                                <td className='px-4 py-2 border-t text-sm text-gray-700'>{order.shippingAddress.city}</td>
                                <td className='px-4 py-2 border-t text-sm text-gray-700'>{order.shippingAddress.country}</td>
                                <td className='px-4 py-2 border-t text-sm text-gray-700'>{order.items.length}</td>
                                <td className='px-4 py-2 border-t text-sm text-gray-700'>${order.payableAmount}</td>
                                <td className='px-4 py-2 border-t text-sm text-gray-700'>{order.status}</td>
                                <td className='px-4 py-2 border-t text-sm text-gray-700'>{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td className='px-4 py-2 border-t text-sm text-gray-700'>{new Date(order.createdAt).toLocaleTimeString()}</td>
                                <td className='px-4 py-2 border-t text-sm text-gray-700'>
                                    <button
                                        onClick={() => handleViewClick(order)}
                                        className='cursor-pointer px-3 py-1 bg-green-500 text-white rounded'>View</button>
                                    <button
                                        onClick={() => handleordercancel(order)}
                                        className='cursor-pointer px-3 py-1 bg-red-500 text-white rounded ml-2'>Cancel</button>
                                </td>
                            </tr>
                        ))}

                        {/* More orders can be added here */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
