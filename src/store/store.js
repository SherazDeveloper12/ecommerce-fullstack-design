import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./slices/product.js";
import { AuthSlice } from "./slices/auth.js";
import { CartSlice } from "./slices/cart.js";
export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    auth: AuthSlice.reducer,
    cart: CartSlice.reducer,
  },
});