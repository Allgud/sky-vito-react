import * as S from './styles'
import GoodCard from '../GoodCard'

type BlockTitle = {
    title: string
}

const CardsBlock = ({title}:BlockTitle) => {
    return(
        <>
            <S.BlockTitle>{title}</S.BlockTitle>
            <S.CardsList>
                <GoodCard 
                    imgUrl=""
                    title="Ракетка для большого тенниса Triumph Pro ST"
                    price="2 200 ₽"
                    place="Санкт Петербург"
                    date="Сегодня в 10:45"
                />
            </S.CardsList>
        </>
    )
}

export default CardsBlock

