import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    },
    reducers: {
        fetchCartFromStorage: (state) => {
        const storedItems = localStorage.getItem('cartItems');
        if(storedItems) {
            state.items = JSON.parse(storedItems);
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
        }
    },
    addItemToCart: (state, action) => {
        const newItem = action.payload;
        const existingItem = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')).find(item => item.id === newItem.id) : null;
        if(!existingItem) {
            state.items.push({
                id: newItem.id,
                title: newItem.title,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
            });
        }   
        else {
            existingItem.quantity++;
            existingItem.totalPrice += newItem.price;
        }
        state.totalQuantity++;
        state.totalAmount += newItem.price;
        localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action) => {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);
        if(existingItem) {
            state.totalQuantity--;
            state.totalAmount -= existingItem.price;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        }
    },
    clearCart: (state) => {
        state.items = [];
        state.totalQuantity = 0;
        state.totalAmount = 0;
        localStorage.removeItem('cartItems');
    }
    }
});

export const { fetchCartFromStorage, addItemToCart, removeItemFromCart, clearCart } = CartSlice.actions;