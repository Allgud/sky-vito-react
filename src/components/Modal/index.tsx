import { ReactNode } from 'react'
import * as S from './styles'

type ModalChildren = {
    children: ReactNode
}

const Modal = ({children}:ModalChildren) => {
    return (
        <S.Modal>
            <S.ModalContent>
                {children}
            </S.ModalContent>
        </S.Modal>
    )
}

export default Modal