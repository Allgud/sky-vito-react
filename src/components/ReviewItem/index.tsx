import * as S from './styles'
import { Comment } from '../../types'

const ReviewItem = ({author, created_on, text, id}:Comment) => {
    return (
        <S.ReviewListItem>
            <S.ReviewItem>
                <S.ReviewLeft>
                    <S.ReviewImage>
                        <S.ReviewImageImg src='#'/>
                    </S.ReviewImage>
                </S.ReviewLeft>
                <S.ReviewRight>
                    <S.ReviewName>{author.name}
                        <S.ReviewDate>{created_on}</S.ReviewDate>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>{text}</S.ReviewText>
                </S.ReviewRight>
            </S.ReviewItem>
        </S.ReviewListItem>
    )
}

export default ReviewItem