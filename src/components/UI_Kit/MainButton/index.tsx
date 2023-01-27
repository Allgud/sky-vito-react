import * as S from './styles'

type ButtonProps = {
    title: string
}

const MainButton = ({title}:ButtonProps) => {
    return (
        <S.MainButton>{title}</S.MainButton>
    )
}

export default MainButton