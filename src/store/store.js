import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./slices/product.js";
import { AuthSlice } from "./slices/auth.js";
export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    auth: AuthSlice.reducer,
  },
});