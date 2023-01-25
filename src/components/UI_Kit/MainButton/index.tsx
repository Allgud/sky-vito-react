import * as S from './styles'

type ButtonTitle = {
    title: string
}

const MainButton = ({title}:ButtonTitle) => {
    return (
        <S.MainButton>{title}</S.MainButton>
    )
}

export default MainButton