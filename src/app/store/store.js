import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../../api/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import basketReducer from "../../slices/basketSlice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer, 
        basket: basketReducer ,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
