import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from './cartSlice';
import shopReducer from "./pr";
import productReducer from "./productSlice";
export const Store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        shop: shopReducer,
        product: productReducer,
    }
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;
export default Store;