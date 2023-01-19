import { useState, createContext, ReactNode } from "react";

type ContextChildren = {
    children: ReactNode
}

interface MContext {
    active: boolean,
    handleActive: () => void
}

export const ModalContext = createContext<MContext>({
    active: false,
    handleActive: () => {}
})

const ModalProvider = ({children}:ContextChildren) => {
    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(prev => !prev)
    }

    const value:MContext = {active, handleActive}

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider