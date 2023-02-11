import { ReactNode } from 'react'
import * as S from './styles'
import { ComponentChildren } from '../../types'

const Modal = ({ children }: ComponentChildren) => {
    return (
        <S.Modal>
            <S.ModalContent>
                {children}
            </S.ModalContent>
        </S.Modal>
    )
}

export default Modal