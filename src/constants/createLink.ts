import { GoodImage } from "../types"

export const createLink = (arr:GoodImage[]):string => {
   if(!arr || arr.length === 0) {
    return ''
   }

   return import.meta.env.VITE_API_URL + arr[0].url
}