import useModal from '../../../hooks/useModal'
import * as S from './styles'

type ButtonTitle = {
    title: string
}

const HeaderButton = ({title}:ButtonTitle) => {
    const { handleActive } = useModal()

    return (
        <S.HeaderButton onClick={handleActive}>{title}</S.HeaderButton>
    )
}

export default HeaderButton