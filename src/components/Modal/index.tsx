import { ReactElement } from 'react'
import * as S from './styles'

type ModalChildren = {
    children: ReactElement
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