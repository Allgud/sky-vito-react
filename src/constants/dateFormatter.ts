import { formatRelative } from "date-fns";
import { ucFirst } from "./ucFirst";
import { ru } from "date-fns/locale";

export const dateFormatter = (dateString:string):string => {
    const date = new Date(dateString)
    const today = new Date()
    const res = formatRelative(date, today, { locale: ru })
    
    return ucFirst(res)
} 

   


