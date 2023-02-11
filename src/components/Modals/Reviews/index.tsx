import * as S from './styles'
import ReviewItem from '../../ReviewItem'
import useModal from '../../../hooks/useModal'
import CloseModalButton from '../../UI_Kit/CloseModalButton'
import PublishButton from '../../UI_Kit/PublishButton'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useLocation } from 'react-router'
import { getCurrentsAdsId } from '../../../helpers'
import { addComment } from '../../../store/slices/adsSlice'
import { CommentData } from '../../../types'

const Reviews = () => {
    const { comments } = useAppSelector(state => state.ads)
    const { close } = useModal()
    const { register, handleSubmit, setValue } = useForm<CommentData>()
    const dispatch = useAppDispatch()
    const location = useLocation()

    const onSubmitForm: SubmitHandler<CommentData> = (data) => {
        const id = getCurrentsAdsId(location.pathname)
        dispatch(addComment({ id, text: data.text }))
        setValue("text", '')
    }

    return (
        <S.ReviewsContent>
            <S.ReviewsTitle>Отзывы о товаре</S.ReviewsTitle>
            <CloseModalButton handler={close} />
            <S.ReviewsScroll>
                <S.NewArtForm onSubmit={handleSubmit(onSubmitForm)}>
                    <S.ArtBlockLabel htmlFor='text'>Добавить отзыв</S.ArtBlockLabel>
                    <S.ArtBlockArea
                        {...register('text')}
                    />
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
                                avatar={comment.author}
                            />
                        )
                    }
                </S.ReviewsList>
            </S.ReviewsScroll>
        </S.ReviewsContent>
    )
}

export default Reviews