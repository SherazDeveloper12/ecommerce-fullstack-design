import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const createOrder = createAsyncThunk(
    "order/createOrder",
    async (orderData) => {
        try {
            const response = await axios.post(`${BASE_URL}/orders/create`, orderData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.data;

            return data;
        } catch (error) {
            console.error("Error creating order:", error);
            if (error.response) {
                throw error.response.data;
            }
            throw error;

        }
    }
);

export const FetchAllOrders = createAsyncThunk(
    "order/fetchAllOrders",
    async () => {
        try {
            const response = await axios.get(`${BASE_URL}/orders/`);
            const data = await response.data;
            return data;
        } catch (error) {
            if (error.response) {
                throw error.response.data;
            }
            throw error;
        }
    }
);

export const updateOrderStatus = createAsyncThunk(
    "order/updateOrderStatus",
    async ({ orderId, newStatus }) => {
        try {
            const response = await axios.put(`${BASE_URL}/orders/update-status/${orderId}`, { status: newStatus }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.data;
            console.log("Order status updated successfully:", data);
            return data;
        } catch (error) {
            console.error("Error updating order status:", error);
            if (error.response) {
                throw error.response.data;
            }
            throw error;
        }
    }
);
export const fetchOrdersbyuserid = createAsyncThunk(
    "order/fetchOrdersbyuserid",
    async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/orders/user/${id}`);
            const data = await response.data.orders;
            return data;
        } catch (error) {
            if (error.response) {
                throw error.response.data;
            }
            throw error;
        }
    });

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        selectedOrder: null,
        status: "idle",
        error: null,
    },
    reducers: {
        setSelectedOrder: (state, action) => {
            state.selectedOrder = action.payload;
        },
        addOrder: (state, action) => {
            console.log("Adding new order to state:", action.payload);
            state.orders.push(action.payload);
            localStorage.setItem("orders", JSON.stringify(state.orders));
        },
        updateOrderLocally: (state, action) => {
            const updatedOrder = action.payload;
            const updatestate = state.orders.map(order => order._id === updatedOrder._id ? updatedOrder : order);
            state.orders = updatestate;
            localStorage.setItem("orders", JSON.stringify(state.orders));

        },
        fetchOrders: (state, action) => {
            const storedOrders = localStorage.getItem("orders");
            if (storedOrders) {
                state.orders = JSON.parse(storedOrders);
            }
        },
        fetchAllOrdersLocally: (state, action) => {
            const storedOrders = localStorage.getItem("allorders");
            if (storedOrders) {
                state.orders = JSON.parse(storedOrders);
            }
        },
        clearOrders: (state) => {
            state.orders = [];
            localStorage.removeItem("orders");
        },
        resetOrdersStatus: (state) => {
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.orders.push(action.payload);
                localStorage.setItem("orders", JSON.stringify(state.orders));
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
        builder
            .addCase(FetchAllOrders.pending, (state) => {
               
            })
            .addCase(FetchAllOrders.fulfilled, (state, action) => {
              localStorage.setItem("allorders", JSON.stringify(action.payload));
                state.orders = action.payload;
            })
            .addCase(FetchAllOrders.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
        builder
            .addCase(updateOrderStatus.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateOrderStatus.fulfilled, (state, action) => {
                state.status = "succeeded";
                const updatedOrder = action.payload;
                const index = state.orders.findIndex(order => order._id === updatedOrder._id);
                state.orders[index] = updatedOrder;
                localStorage.setItem("orders", JSON.stringify(state.orders));
            })
            .addCase(updateOrderStatus.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
        builder
            .addCase(fetchOrdersbyuserid.pending, (state) => {
            })
            .addCase(fetchOrdersbyuserid.fulfilled, (state, action) => {
                state.orders = action.payload;
                localStorage.setItem("orders", JSON.stringify(state.orders));
            })
            .addCase(fetchOrdersbyuserid.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});
export const { fetchOrders, clearOrders, resetOrdersStatus, updateOrderLocally, addOrder , fetchAllOrdersLocally, setSelectedOrder} = orderSlice.actions;

export default orderSlice.reducer;