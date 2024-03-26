import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feathers/todoSlice"

export const store =configureStore({
    reducer:todoReducer
})