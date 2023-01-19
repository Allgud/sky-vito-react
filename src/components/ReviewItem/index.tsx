import * as S from './styles'

type ReviewProps = {
    author: string,
    date: string,
    comment: string,
    title: string
}

const ReviewItem = ({author, date, comment, title}:ReviewProps) => {
    return (
        <S.ReviewListItem>
            <S.ReviewItem>
                <S.ReviewLeft>
                    <S.ReviewImage>
                        <S.ReviewImageImg src='#'/>
                    </S.ReviewImage>
                </S.ReviewLeft>
                <S.ReviewRight>
                    <S.ReviewName>{author}
                        <S.ReviewDate>{date}</S.ReviewDate>
                    </S.ReviewName>
                    <S.ReviewTitle>{title || "Комментарий"}</S.ReviewTitle>
                    <S.ReviewText>{comment}</S.ReviewText>
                </S.ReviewRight>
            </S.ReviewItem>
        </S.ReviewListItem>
    )
}

export default ReviewItem