import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, userData);
      return response.data;
    } catch (error) {
       if (error.response) {
        throw error.response.data; 
      }
     throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
      return response.data;
    }
    catch (error) {
      
      if (error.response) {
        throw error.response.data; }
     throw error;
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/currentUser",
  async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idle",
    error: "",
    token: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("authToken");
    },
    fetchToken: (state, action) => {
      state.token = localStorage.getItem("authToken");
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("authToken", action.payload.token);

    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("authToken", action.payload.token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.error.message;
      console.log('Login error message:', action.error.message);
      state.status = "failed";
    });
    builder.addCase(currentUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(currentUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(currentUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  }

});

export const { logout, fetchToken } = AuthSlice.actions;

export default AuthSlice.reducer;