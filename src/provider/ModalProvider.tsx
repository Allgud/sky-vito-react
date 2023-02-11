import { useState, createContext, ReactNode, SyntheticEvent } from "react";
import AddEditArticle from "../components/Modals/AddEditArticle";
import Reviews from "../components/Modals/Reviews";
import SignIn from "../components/Modals/SignIn";
import { ComponentChildren } from "../types";

interface MContext {
    active: boolean,
    currentModal: ReactNode,
    close: () => void,
    getModal: (arg0: SyntheticEvent) => void
}

export const ModalContext = createContext<MContext>({
    active: false,
    currentModal: <></>,
    close: () => { },
    getModal: () => { }
})

const ModalProvider = ({ children }: ComponentChildren) => {
    const [active, setActive] = useState(false)
    const [currentModal, setCurrentModal] = useState(<></>)

    const closeModal = () => setActive(false)

    const getModal = (evt: SyntheticEvent) => {
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
            setCurrentModal(<AddEditArticle title="Новое объявление" />)
        }
        if (id === "user_article") {
            setCurrentModal(<AddEditArticle title="Редактировать объявление" />)
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