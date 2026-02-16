import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BasE_URL = import.meta.env.VITE_BASE_URL;
export const fetchMessages = createAsyncThunk(
    "chat/fetchMessages",
    async (id) => {
        try {
            const response = await axios.get(`${BasE_URL}/chat/${id}`);
          
            return response.data.chats;
        } catch (error) {
            if (error.response) {
                throw error.response.data.message;
            }
            throw error.message;
        }
    });

export const sendMessage = createAsyncThunk(
    "chat/sendMessage",
    async(data)=>{
try {
    const response = await axios.post(`${BasE_URL}/chat/create`, data);
    return response.data.chat;
} catch (error) {
    if (error.response) {
        throw error.response.data.message;
    }
    throw error.message;
}
    }   );
export const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
        loading: false,
        error: null,
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
            const messagesToStore = JSON.stringify(state.messages);
            localStorage.setItem("chatMessages", messagesToStore);
        },
        fetchMessagesLocally: (state) => {
            const messages = localStorage.getItem("chatMessages");
            if (messages) {
                state.messages = JSON.parse(messages);
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.loading = false;
            state.messages = action.payload;
            const messagesToStore = JSON.stringify(state.messages);
            localStorage.setItem("chatMessages", messagesToStore);
        });
        builder.addCase(fetchMessages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});


export const { addMessage, fetchMessagesLocally } = chatSlice.actions;

export default chatSlice.reducer;