import { configureStore } from "@reduxjs/toolkit";
import adsSlice from "./slices/adsSlice";

const store = configureStore({
    reducer: {
        ads: adsSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch