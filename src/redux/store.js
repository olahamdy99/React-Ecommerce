import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import favoriteSlice from './favoriteSlice';
import authSlice from './authSlice'; 

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice,
        carts: cartSlice,
        favorite: favoriteSlice,
        auth: authSlice, 
    },
});
