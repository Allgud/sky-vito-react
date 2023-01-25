import useModal from '../../../hooks/useModal'
import * as S from './styles'
import { MouseEvent } from 'react'

type ButtonTitle = {
    title: string,
    id: string
}

const HeaderButton = ({title, id}:ButtonTitle) => {
    const { getModal } = useModal()

    return (
        <S.HeaderButton 
            id={id} 
            onClick={(evt) => getModal(evt)}
        >
            {title}
        </S.HeaderButton>
    )
}

export default HeaderButton