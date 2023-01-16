import * as S from './styles'

interface ButtonTitle {
    title: String
}

const MainButton = ({title}:ButtonTitle) => {
    return (
        <S.MainButton>{title}</S.MainButton>
    )
}

export default MainButton