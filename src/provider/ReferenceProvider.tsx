import { createContext, RefObject, useRef } from 'react';
import { ComponentChildren } from '../types'


export const ReferenceContext = createContext({
    inputRef: RefObject<HTMLInputElement>
})

const ReferenceProvider = ({ children }: ComponentChildren) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const value = { inputRef }

    return (
        <ReferenceContext.Provider value={value}>
            {children}
        </ReferenceContext.Provider>
    )
}

export default ReferenceProvider