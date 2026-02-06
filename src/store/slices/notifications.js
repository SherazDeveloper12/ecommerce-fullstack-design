import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchNotifications = createAsyncThunk(
    "notifications/fetchNotifications",
    async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/notifications/${id}`);
            return response.data;
        } catch (error) {
            if (error.response) {
                throw error.response.data; 
            }
            throw error;
        }
    }
);

export const notificationsSlice = createSlice({
    name: "notifications",
    initialState: {
        notifications: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotifications.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchNotifications.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.notifications = action.payload;
            })
            .addCase(fetchNotifications.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});