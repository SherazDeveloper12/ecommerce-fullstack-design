import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./slices/product.js";
export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
  },
});