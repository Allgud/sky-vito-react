import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Good, AdsState, Comment, AdsImage } from '../../types'

const initialState:AdsState = {
   allGoods: [],
   appGoods: [],
   loading: false,
   error: null,
   currentGood: null,
   comments: [],
   sellerGoods: [],
   isUserGood: false
}

export const getAllAds = createAsyncThunk<Good[], undefined, {rejectValue: string}>(
    "ads/getAllAds",
    async function() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/ads`)
        
        return response.data
    }
)

export const getCurrentAds = createAsyncThunk<Good, number, {rejectValue: string}>(
    "ads/getCurrentAds",
    async function (id) {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/ads/${id}`)

        return response.data
    }
)

export const getAdsComments = createAsyncThunk<Comment[], number, {rejectValue: string}>(
    "ads/getAdsComments",
    async function(id) {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/ads/${id}/comments`)

        return response.data
    }
)

export const getSellerGoods = createAsyncThunk<Good[], number, { rejectValue: string }>(
    'ads/getSellerGoods',
    async function(id) {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/ads`, {
            params: {
                user_id: id
            }
        })

        return response.data
    }
)

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        filterByText(state, action: PayloadAction<string>) {
            state.appGoods = state.allGoods.filter(el => el.title.toLowerCase().startsWith(action.payload.toLowerCase()))
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getAllAds.fulfilled, (state, action) => {
            state.allGoods = action.payload
            state.appGoods = action.payload
          })
          .addCase(getCurrentAds.fulfilled, (state, action) => { 
            state.currentGood = action.payload
          })
          .addCase(getAdsComments.fulfilled, (state, action) => {
            state.comments = action.payload.sort((a, b) => a.id - b.id)
          })
          .addCase(getSellerGoods.fulfilled, (state, action) => {
            state.sellerGoods = action.payload
          })
    }
})

export default adsSlice.reducer
export const { filterByText } = adsSlice.actions