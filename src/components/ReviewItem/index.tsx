import * as S from './styles'
import { Comment } from '../../types'
import { dateFormatter } from '../../helpers'

const ReviewItem = ({ author, created_on, text, id }: Comment) => {
    return (
        <S.ReviewListItem>
            <S.ReviewItem>
                <S.ReviewLeft>
                    <S.ReviewImage>
                        <S.ReviewImageImg src={`${import.meta.env.VITE_API_URL}/${author.avatar}`} />
                    </S.ReviewImage>
                </S.ReviewLeft>
                <S.ReviewRight>
                    <S.ReviewName>{author.name}
                        <S.ReviewDate>{dateFormatter(created_on)}</S.ReviewDate>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>{text}</S.ReviewText>
                </S.ReviewRight>
            </S.ReviewItem>
        </S.ReviewListItem>
    )
}

export default ReviewItem