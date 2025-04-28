import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice"
import detailsReducer from "./details/slice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        details: detailsReducer,
    }
})