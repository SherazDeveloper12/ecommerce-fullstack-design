import React from 'react'
import { useDispatch } from "react-redux";
import {socket} from "../lib/socket"
import { addOrder, updateOrderLocally } from "../store/slices/order";
import { useEffect } from "react";
import { addNotification } from '../store/slices/notifications';
import { toast } from 'sonner';

export default function useAppSockets()
 {




    const dispatch = useDispatch();
   useEffect(()=>{
         socket.on("orderStatusUpdated", (data) => {
  dispatch(updateOrderLocally(data.updatedOrder));
})

socket.on("newOrderCreated", (data) => {
  dispatch(addOrder(data.order));
  dispatch(addNotification(data.notification));
  
 toast.info(`${data.notification.message}`)
})
    },[])
  return {}
}
