import useModal from '../../../hooks/useModal'
import * as S from './styles'
import { MouseEvent } from 'react'

type ButtonTitle = {
    title: string,
    id: string,
    action: (arg0:MouseEvent) => void
}

const HeaderButton = ({title, id, action}:ButtonTitle) => {

    return (
        <S.HeaderButton 
            id={id} 
            onClick={(evt) => action(evt)}
        >
            {title}
        </S.HeaderButton>
    )
}

export default HeaderButton