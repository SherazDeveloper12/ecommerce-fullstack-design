import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
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
        console.log("Order created successfully:", data);

    return data;
    } catch (error) {
        console.error("Error creating order:", error);
       if (error.response) {
        throw error.response.data; }
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
        throw error.response.data; }
        throw error;
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    status: "idle",
    error: null,
    },
    reducers: {
        fetchOrders: (state, action) => {
            const storedOrders = localStorage.getItem("orders");
            if (storedOrders) {
                state.orders = JSON.parse(storedOrders);
            } 
        },
        clearOrders: (state) => {
            state.orders = [];
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
                state.status = "loading";
            })
            .addCase(FetchAllOrders.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.orders = action.payload;
            })
            .addCase(FetchAllOrders.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});
export const { fetchOrders, clearOrders, resetOrdersStatus } = orderSlice.actions;

export default orderSlice.reducer;