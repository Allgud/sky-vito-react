import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Good, AdsState } from '../../types'

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