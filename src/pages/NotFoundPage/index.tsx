import { FC } from "react"
import * as S from './styles'
import PageMenu from "../../components/PageMenu"

const NotFoundPage:FC = () => {
    return(
        <S.NotFoundConteiner>
            <S.NotFoundContent>
                <PageMenu />
                <S.NotFoundText>Страница не найдена.</S.NotFoundText>
                <S.NotFoundText>Иди домой!</S.NotFoundText>
            </S.NotFoundContent>
        </S.NotFoundConteiner>
    )
}

export default NotFoundPage