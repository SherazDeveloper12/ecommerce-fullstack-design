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
            if (storedItems) {
                state.items = JSON.parse(storedItems);
            }
        },
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            console.log("items" , state.items)
            const existingItem = state.items.find(item => item.product._id === newItem.product._id);
            if (!existingItem) {
           state.items.unshift(newItem);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items));
            
        },
        removeItemFromCart: (state, action) => {
            const id = action.payload;
            const filteredItems = state.items.filter(item => item.product._id !== id);
            state.items = filteredItems;
            localStorage.setItem('cartItems', JSON.stringify(state.items));
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