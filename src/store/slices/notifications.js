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

export const MarkNotificationsAsRead = createAsyncThunk(
    "notifications/markAsRead",
    async (Notifcations) => {
        try {
            const response = await axios.put(`${BASE_URL}/notifications/mark-notifications-as-read`, { notifications: Notifcations }, {
                headers: {
                    "Content-Type": "application/json",
                },            });
            return response.data;
        } catch (error) {
            
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
    reducers: {
        fetchNotificationsLocally: (state, action) => {
            const notifications = JSON.parse(localStorage.getItem("notifications"));
            if (notifications) {
           state.notifications = notifications;
            }
        },
        markAsRead: (state, action) => {
            const notificationId = action.payload;
            const notificationupdated = state.notifications.map(notification => notification._id === notificationId ? {...notification, isRead: true} : notification);
           console.log("Notification marked as read:", notificationupdated);
            localStorage.setItem("notifications", JSON.stringify(notificationupdated));
           state.notifications = notificationupdated;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotifications.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchNotifications.fulfilled, (state, action) => {
                state.status = "succeeded";
                localStorage.setItem("notifications", JSON.stringify(action.payload));
                state.notifications = action.payload;
            })
            .addCase(fetchNotifications.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});
export const { markAsRead , fetchNotificationsLocally} = notificationsSlice.actions;
export default notificationsSlice.reducer;