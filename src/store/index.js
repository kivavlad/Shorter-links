import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "./slice/linkSlice";

export const store = configureStore({
    reducer: {
        links: linkReducer,
    }
});