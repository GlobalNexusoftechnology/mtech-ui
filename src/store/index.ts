import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import productsSlice from './slices/apiSlice'
const store = configureStore({
    reducer:{
        products: productReducer,
        productapi: productsSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;