import * as S from './styles'
import { Link } from 'react-router-dom'

type GoodsPropTypes = {
    imgUrl: string,
    title: string,
    place: string,
    date: string,
    price: string
}

const GoodCard = ({imgUrl, title, price, place, date}:GoodsPropTypes) => {
    return (
        <S.CardItem>
            <S.Card>
                <S.CardImage>
                    <S.CardsImageImg src={imgUrl}/>
                </S.CardImage>
                <S.CardContent>
                    <Link to="/article">
                        <S.CardTitle>{title}</S.CardTitle>
                    </Link>
                    <S.CardPrice>{price}</S.CardPrice>
                    <S.CardPlace>{place}</S.CardPlace>
                    <S.CardDate>{date}</S.CardDate>
                </S.CardContent>
            </S.Card>
        </S.CardItem>
    )
}

export default GoodCard