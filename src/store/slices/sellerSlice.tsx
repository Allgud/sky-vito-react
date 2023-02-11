import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { SellerState, User } from "../../types";
import axios from "axios";

export const getCurrentSeller = createAsyncThunk<User[], number, {rejectValue:string}>(
    'seller/getCurrentSeller',
    async function(id) {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/all`)
        return response.data.filter((seller: { id: number }) => seller.id === id)
    }
)

const initialState: SellerState = {
    currentSeller: {} as User
}

const sellerSlice = createSlice({
    name: 'seller',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCurrentSeller.fulfilled, (state, action) => {
                state.currentSeller = JSON.parse(JSON.stringify(action.payload[0]))
            })
    }
})

export default sellerSlice.reducer