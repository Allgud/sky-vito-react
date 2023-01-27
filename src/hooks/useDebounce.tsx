import { debounce } from "../helpers";
import { useMemo } from "react";
import { useLatest } from "./useLatest";


export const useDebounce = (cb: Function):any => {
    const latestCb = useLatest(cb)
    
    return useMemo(
        () => 
            debounce((...args:any) => {
                latestCb.current(...args)
            }),
        [latestCb]
    )
} 