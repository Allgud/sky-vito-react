import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import { GoodImage } from '../../types'

type User = {
    userId: number,
    name: string,
    email: string,
    city: string,
    avatar: string,
    salesFrom: string,
    phone: string,
}

type Good = {
    title: string,
    description: string,
    price: number,
    id: number,
    images: Array<GoodImage>,
    userId: number,
    created_on: string,
    user: User,
}

type AdsState = {
    allGoods: Good[],
    loading: boolean,
    error: string | null,
}

const initialState:AdsState = {
   allGoods: [],
   loading: false,
   error: null,
}

export const getAllAds = createAsyncThunk<Good[], undefined, {rejectValue: string}>(
    "ads/getAllAds",
    async function() {
        const response = await fetch('http://localhost:8090/ads')
        
        return await response.json()
    }
)

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getAllAds.fulfilled, (state, action) => {
            console.log(action.payload);
            
            state.allGoods = action.payload
          })
    }
})

export default adsSlice.reducer