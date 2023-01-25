import { useState, createContext, ReactNode, MouseEvent, useEffect } from "react";
import AddEditArticle from "../components/Modals/AddEditArticle";
import Reviews from "../components/Modals/Reviews";
import SignIn from "../components/Modals/SignIn";

type ContextChildren = {
    children: ReactNode
}

interface MContext {
    active: boolean,
    currentModal: ReactNode,
    close: () => void,
    getModal: (arg0: MouseEvent) => void
}

export const ModalContext = createContext<MContext>({
    active: false,
    currentModal: <></>,
    close: () => { },
    getModal: (arg0) => { }
})

const ModalProvider = ({ children }: ContextChildren) => {
    const [active, setActive] = useState(false)
    const [currentModal, setCurrentModal] = useState(<></>)

    const closeModal = () => setActive(false)

    const getModal = (evt: MouseEvent) => {
        const id = evt.currentTarget.id
        if (id === 'link') {
            return
        }
        if (id === 'reviews') {
            setCurrentModal(<Reviews />)
        }
        if (id === 'signin') {
            setCurrentModal(<SignIn />)
        }
        if (id === 'addArt') {
            setCurrentModal(<AddEditArticle modalTitle="Новое объявление" />)
        }
        setActive(true)
    }

    const props = {
        active,
        currentModal,
        close: closeModal,
        getModal
    }

    return (
        <ModalContext.Provider value={props}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider