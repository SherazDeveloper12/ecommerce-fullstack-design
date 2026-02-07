import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const FetchPendingRevenue = createAsyncThunk(
    "admin/fetchPendingRevenue",
    async () => {
       try {
         const response = await axios.get(`${BASE_URL}/admin/revenue/pending`);
         
        return response.data.pendingRevenue;
       } catch (error) {
            if (error.response) {
            throw error.response.data; }
            throw error;
       }
    }
);
export const adminSlice = createSlice({
    name: "admin",
    initialState: {
        pendingRevenue: 0,
        liveUsers: 0,
        users: [],
        status: "idle",
        error: null,
    },
    reducers: {
        setLiveUsers: (state, action) => {
            state.liveUsers = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchPendingRevenue.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(FetchPendingRevenue.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.pendingRevenue = action.payload;
            })
            .addCase(FetchPendingRevenue.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setLiveUsers } = adminSlice.actions;
export default adminSlice.reducer;