import { createSlice } from "@reduxjs/toolkit";
import { showMessage } from './messageSlice';

const initialState = {
    favorites: [],
    isLoggedIn: false, // New state to manage authentication status
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            const existingProduct = state.favorites.find(item => item.id === action.payload.id);
            if (!existingProduct) {
                state.favorites.push(action.payload);
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
            } else {
                // showMessage("Product already exists in favorites"); 
                console.log("Product already exists in favorites");
            }
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(
                (item) => item.id !== action.payload
            );
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { addToFavorites, removeFromFavorites, setLoggedIn } = favoriteSlice.actions;
export default favoriteSlice.reducer;
