import * as S from './styles'

interface ButtonTitle {
    title: String
}

const HeaderButton = ({title}:ButtonTitle) => {
    return (
        <S.HeaderButton>{title}</S.HeaderButton>
    )
}

export default HeaderButton