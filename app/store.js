import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../app/favSlice"
export const store = configureStore({
    reducer:favReducer
})