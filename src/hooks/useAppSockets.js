import { useDispatch } from "react-redux";
import {socket} from "../lib/socket"
import { updateOrderLocally } from "../store/slices/order";


export default function useAppSockets() {
    const dispatch = useDispatch();
    socket.on("orderStatusUpdated", (data) => {
  dispatch(updateOrderLocally(data.updatedOrder));
})
return{}
}