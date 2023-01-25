import * as S from './styles'
import ReviewItem from '../../ReviewItem'
import useModal from '../../../hooks/useModal'
import CloseModalButton from '../../UI_Kit/CloseModalButton'
import PublishButton from '../../UI_Kit/PublishButton'

const Reviews = () => {
    const { close} = useModal()

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
                    <ReviewItem 
                        author='Олег'
                        date='14 августа'
                        comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.'
                        title='Комментарий'
                    />
                    <ReviewItem 
                        author='Олег'
                        date='14 августа'
                        comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.'
                        title='Комментарий'
                    />
                    <ReviewItem 
                        author='Олег'
                        date='14 августа'
                        comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.'
                        title='Комментарий'
                    />
                    <ReviewItem 
                        author='Олег'
                        date='14 августа'
                        comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.'
                        title='Комментарий'
                    />
                </S.ReviewsList>
            </S.ReviewsScroll>
        </S.ReviewsContent>
    )
}

export default Reviews