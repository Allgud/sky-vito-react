import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios'
import { api } from "../../http";
import { AuthData, FormValues, User, UserState, ProfileFormValues, Good } from "../../types";

export const createUser = createAsyncThunk<User, FormValues, {rejectValue: string}>(
    'user/createUser',
    async function (data) {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, 
        JSON.stringify(data))

        return response.data
    }
)

export const login = createAsyncThunk<AuthData, FormValues, {rejectValue: string}>(
    'user/login',
    async function(data) {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/auth/login`,
            JSON.stringify(data),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        return response.data 
    }
)

export const getCurrentUser = createAsyncThunk<User, undefined, {rejectValue: string}>(
    'user/getCurrentUser',
    async function() {
        const response = await api.get('/user')

        return response.data
    }
)

export const checkIsAuth = createAsyncThunk<AuthData, undefined>(
    'user/checkIsAuth',
    async function () {
        const access_token = localStorage.getItem('token')
        const refresh_token = localStorage.getItem('refTok')
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/auth/login`, {
            access_token,
            refresh_token
        })

        return response.data
    }
)

export const updateUserData = createAsyncThunk<User, ProfileFormValues>(
    'user/updateUserData',
    async function(data) {
        const response = await api.patch('/user', JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json"
            }
        })

        return response.data
    }
)

export const getUserAds = createAsyncThunk<Good[], undefined, {rejectValue: string}>(
    'user/getUserAds',
    async function () {
        const response = await api.get('/ads/me')

        return response.data
    } 
)

export const changeUserAvatar = createAsyncThunk<User, FormData, {rejectValue: string}>(
    'user/changeUserAvatar',
    async function(data) {
        const response = await api.post(
            '/user/avatar', 
            data
        )
        return response.data 
    }
)

const initialState:UserState = {
    user: {} as User,
    isUser: true,
    isAuth: false,
    userGoods: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeIsUser(state) {
            state.isUser = !state.isUser
        },
        logout(state) {
            localStorage.removeItem('token')
            localStorage.removeItem('refTok')
            state.isAuth = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.fulfilled, (state) => {
                state.isUser = true
            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem('token', action.payload.access_token)
                localStorage.setItem('refTok', action.payload.refresh_token)
                state.isAuth = true
            })
            .addCase(checkIsAuth.fulfilled, (state, action) => {
                localStorage.setItem('token', action.payload.access_token)
                localStorage.setItem('refTok', action.payload.refresh_token)
                state.isAuth = true
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.user = {...action.payload}
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.user = JSON.parse(JSON.stringify(action.payload))
            })
            .addCase(getUserAds.fulfilled, (state, action) => {
                state.userGoods = action.payload
            })
            .addCase(changeUserAvatar.fulfilled, (state, action) => {
                state.user.avatar = action.payload.avatar
            })
    }
})

export default userSlice.reducer
export const { 
    changeIsUser, 
    logout
} = userSlice.actions