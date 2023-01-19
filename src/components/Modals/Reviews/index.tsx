import * as S from './styles'
import ReviewItem from '../../ReviewItem'
import useModal from '../../../hooks/useModal'

const Reviews = () => {
    const { handleActive } = useModal()

    return (
        <S.ReviewsContent>
            <S.ReviewsTitle>Отзывы о товаре</S.ReviewsTitle>
            <S.CloseBtn onClick={handleActive}>
                <S.BtnCloseLine />
            </S.CloseBtn>
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
                    <S.ArtBlockButton>Опубликовать</S.ArtBlockButton>
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