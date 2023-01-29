import { configureStore } from "@reduxjs/toolkit";
import adsSlice from "./slices/adsSlice";
import userSlice from './slices/userSlice'

const store = configureStore({
    reducer: {
        ads: adsSlice,
        user: userSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch