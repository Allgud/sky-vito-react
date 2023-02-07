import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import adsSlice from "./slices/adsSlice";
import userSlice from './slices/userSlice'
import sellerSlice from "./slices/sellerSlice";

const store = configureStore({
    reducer: {
        ads: adsSlice,
        user: userSlice,
        seller: sellerSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch