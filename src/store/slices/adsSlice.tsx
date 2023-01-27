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
    appGoods: Good[],
    loading: boolean,
    error: string | null,
}

const initialState:AdsState = {
   allGoods: [],
   appGoods: [],
   loading: false,
   error: null,
}

export const getAllAds = createAsyncThunk<Good[], undefined, {rejectValue: string}>(
    "ads/getAllAds",
    async function() {
        const response = await axios.get('http://localhost:8090/ads')
        
        return response.data
    }
)

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        filterByText(state, action: PayloadAction<string>) {
            state.appGoods = state.allGoods.filter(el => el.title.toLowerCase().startsWith(action.payload.toLowerCase()))
        },

    },
    extraReducers: (builder) => {
        builder
          .addCase(getAllAds.fulfilled, (state, action) => {
            state.allGoods = action.payload
            state.appGoods = action.payload
          })
    }
})

export default adsSlice.reducer
export const { filterByText } = adsSlice.actions