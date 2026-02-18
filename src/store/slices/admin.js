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

export const getchatsbyconversationid = createAsyncThunk(
    "admin/getchatsbyconversationid",
    async (conversationId) => {
try {
    const response = await axios.get(`${BASE_URL}/chat/conversation/${conversationId}`);
    return response.data.chats;
} catch (error) {
    if (error.response) {
        throw error.response.data;
    }   throw error;
}

    })

export const FetchAllConversations = createAsyncThunk(
    "admin/fetchAllConversations",
    async () => {
       try {
         const response = await axios.get(`${BASE_URL}/conversations/all`);
        return response.data.conversations;
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
        liveUsersCount: 0,
        liveUsersCountlast60min: 0,
        conversations: [],
        chats: [],
        users: [],
        status: "idle",
        error: null,
    },
    reducers: {
        setLiveUsers: (state, action) => {
            state.liveUsers = action.payload;
        },
        setLiveUsersCount: (state, action) => {
            state.liveUsersCount = action.payload;
        },
        setLiveUsersCountlast60min: (state, action) => {
            state.liveUsersCountlast60min = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(FetchPendingRevenue.pending, (state) => {
            //     state.status = "loading";
            //     state.error = null;
            // })
            .addCase(FetchPendingRevenue.fulfilled, (state, action) => {
                // state.status = "succeeded";
                state.pendingRevenue = action.payload;
            })
            .addCase(FetchPendingRevenue.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
                builder
            // .addCase(FetchAllConversations.pending, (state) => {
            //     state.status = "loading";
            //     state.error = null;
            // })
            .addCase(FetchAllConversations.fulfilled, (state, action) => {
                // state.status = "succeeded";
                state.conversations = action.payload;
            })
            .addCase(FetchAllConversations.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
                builder
            .addCase(getchatsbyconversationid.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(getchatsbyconversationid.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.chats = action.payload;
            })
            .addCase(getchatsbyconversationid.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setLiveUsers, setLiveUsersCount, setLiveUsersCountlast60min } = adminSlice.actions;
export default adminSlice.reducer;