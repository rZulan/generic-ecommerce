import { configureStore } from "@reduxjs/toolkit";
import { fakeStoreAPI } from "../redux/api/API";

export const store = configureStore({
    reducer:{
        [fakeStoreAPI.reducerPath]: fakeStoreAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(fakeStoreAPI.middleware),
})

export default store