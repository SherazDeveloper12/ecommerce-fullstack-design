import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../lib/socket"
import { addOrder, FetchAllOrders, updateOrderLocally } from "../store/slices/order";
import { useEffect } from "react";
import { addNotification } from '../store/slices/notifications';
import { toast } from 'sonner';
import { addchatinadmin, FetchPendingRevenue, setLiveUsersCount, setLiveUsersCountlast60min } from '../store/slices/admin';
import { addMessage } from '../store/slices/chat';

export default function useAppSockets() {
  const user = useSelector((state) => state.auth.user);



  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(FetchAllOrders())
      dispatch(FetchPendingRevenue())
      socket.on('liveUsersCount', (data) => {
        dispatch(setLiveUsersCount(data));
      });
      socket.on('liveUsersCount60Min', (data) => {
        console.log("data", data);
        dispatch(setLiveUsersCountlast60min(data));
      });
      socket.on("newChat", (data) => {
        dispatch(addchatinadmin(data));
            console.log("New chat message received: even with user ", data);
        })

    }
    else{
      socket.on("newChat", (data) => {
        dispatch(addMessage(data));
            console.log("New chat message received: even without user ", data);
        })
    }
     return () => {
      socket.off("newChat",);
    }

  }, [user])
  useEffect(() => {
    socket.on("orderStatusUpdated", (data) => {
      dispatch(updateOrderLocally(data.updatedOrder));
    })

    socket.on("newOrderCreated", (data) => {
      dispatch(addOrder(data.order));
      dispatch(addNotification(data.notification));

      toast.info(`${data.notification.message}`)
    })
    
      
   
     
   

  }, [])
  return {}
}
