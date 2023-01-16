import * as S from './styles'

interface PageTitleType {
    title: String
}

const PageTitle = ({title}:PageTitleType) => {
    return (
        <S.PageTitle>{title}</S.PageTitle>
    )
}

export default PageTitle