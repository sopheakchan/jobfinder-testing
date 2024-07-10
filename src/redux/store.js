import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./feature/category-job/categorySlice";


export const store = configureStore({
    reducer: {
        category: categorySlice,
        
    }
});