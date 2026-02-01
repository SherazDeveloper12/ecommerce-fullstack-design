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
    return data;
    } catch (error) {
        console.error("Error creating order:", error);
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
        addOrder: (state, action) => {
            state.orders.push(action.payload);
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
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});
export const { addOrder, clearOrders, resetOrdersStatus } = orderSlice.actions;

export default orderSlice.reducer;