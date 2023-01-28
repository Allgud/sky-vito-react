import * as S from './styles'
import ReviewItem from '../../ReviewItem'
import useModal from '../../../hooks/useModal'
import CloseModalButton from '../../UI_Kit/CloseModalButton'
import PublishButton from '../../UI_Kit/PublishButton'
import { useAppSelector } from '../../../hooks/useAppSelector'

const Reviews = () => {
    const { comments } = useAppSelector(state => state.ads)
    const { close } = useModal()
    

    return (
        <S.ReviewsContent>
            <S.ReviewsTitle>Отзывы о товаре</S.ReviewsTitle>
            <CloseModalButton handler={close}/>
            <S.ReviewsScroll>
                <S.NewArtForm>
                    <S.NewArtBlock>
                        <S.ArtBlockLabel htmlFor='text'>Добавить отзыв</S.ArtBlockLabel>
                        <S.ArtBlockArea 
                            name='text'
                            rows={5}
                            placeholder="Введите описание"
                        />
                    </S.NewArtBlock>
                    <PublishButton />
                </S.NewArtForm>
                <S.ReviewsList>
                    {   
                        comments &&
                        comments.map(comment => 
                            <ReviewItem
                                key={comment.id} 
                                author={comment.author}
                                created_on={comment.created_on}
                                text={comment.text}
                                id={comment.id}
                            />    
                        )
                    }
                </S.ReviewsList>
            </S.ReviewsScroll>
        </S.ReviewsContent>
    )
}

export default Reviews