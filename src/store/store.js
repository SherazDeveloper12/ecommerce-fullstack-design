import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./slices/product.js";
import { AuthSlice } from "./slices/auth.js";
import { CartSlice } from "./slices/cart.js";
import {orderSlice} from "./slices/order.js";
import { adminSlice } from "./slices/admin.js";
import { notificationsSlice } from "./slices/notifications.js";
export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    auth: AuthSlice.reducer,
    cart: CartSlice.reducer,
    order:  orderSlice.reducer,
    admin: adminSlice.reducer,
    notifications: notificationsSlice.reducer,
  },
});