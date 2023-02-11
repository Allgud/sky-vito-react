import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if(error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const access_token = localStorage.getItem('token')
            const refresh_token = localStorage.getItem('refTok')
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/auth/login`, {
                access_token,
                refresh_token
            })
            localStorage.setItem('token', response.data.access_token)
            localStorage.setItem('refTok', response.data.refresh_token)

            return api.request(originalRequest)
        } catch (err) {
            console.log('Не авторизован');
        }
        
    }
})