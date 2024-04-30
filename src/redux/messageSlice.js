// messageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: null, // State to manage messages
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        showMessage: (state, action) => {
            state.message = action.payload;
        },
        clearMessage: (state) => {
            state.message = null;
        },
    },
});

export const { showMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
