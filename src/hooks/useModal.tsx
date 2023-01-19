import { useContext } from "react";
import { ModalContext } from "../provider/ModalProvider";

const useModal = () => {
    return useContext(ModalContext)
}

export default useModal