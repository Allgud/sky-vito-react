import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios'
import { UserState } from "../../types";

const initialState:UserState = {
    user: null,
    isUser: true
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeIsUser(state) {
            state.isUser = false
        }
    }
})

export default userSlice.reducer
export const { changeIsUser } = userSlice.actions