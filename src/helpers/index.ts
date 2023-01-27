import { GoodImage } from "../types"
import { formatRelative } from "date-fns";
import { ru } from "date-fns/locale";

export const ucFirst = (str:string):string => str.charAt(0).toUpperCase() + str.slice(1)

export const createLink = (arr:GoodImage[]):string => {
   if(!arr || arr.length === 0) {
    return ''
   }

   return import.meta.env.VITE_API_URL + arr[0].url
}

export const dateFormatter = (dateString:string):string => {
    const date = new Date(dateString)
    const today = new Date()
    const res = formatRelative(date, today, { locale: ru })
    
    return ucFirst(res)
}

export const debounce = (cb:Function):Function => {
    let timeout:NodeJS.Timeout;

    return function (this:ThisParameterType<Function>) {
        const called = () => {cb.apply(this, arguments)}

        clearTimeout(timeout)

        timeout = setTimeout(called, import.meta.env.VITE_DELAY)
    }
}
