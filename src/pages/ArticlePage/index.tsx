import * as S from './styles'
import PageMenu from '../../components/PageMenu'
import ArticleImageBox from '../../components/ArticleImageBlock'
import ShowPhoneButton from '../../components/UI_Kit/ShowPhoneButton'
import UserArticleButtons from '../../components/UserArticleButtons'
import Modal from '../../components/Modal'
import Reviews from '../../components/Modals/Reviews'
import { Link } from 'react-router-dom'
import useModal from '../../hooks/useModal'

const ArticlePage = () => {
    const { active, handleActive } = useModal()
    const isUserArticle = false

    return (
        <>
        <S.ArticleBlock>
            <PageMenu />
            <S.ArticleContent>
                <ArticleImageBox />
                <S.ArticleRight>
                    <S.ArticleRightContent>
                        <S.ArticleTitle>Ракетка для большого тенниса Triumph Pro STС Б/У</S.ArticleTitle>
                        <S.ArticleInfo>
                            <S.ArticleDate>Сегодня в 10:45</S.ArticleDate>
                            <S.ArticleCity>Санкт-Петербург</S.ArticleCity>
                            <S.ArticleLink onClick={handleActive}>23 отзыва</S.ArticleLink>
                        </S.ArticleInfo>
                        <S.ArticlePrice>2 200 ₽</S.ArticlePrice>
                        {
                            isUserArticle 
                            ? <UserArticleButtons />
                            : <ShowPhoneButton phone="8-925-891-27-89"/>  
                        }
                        <S.ArticleAuthor>
                            <S.ArticleAuthorImage>
                                <S.ArticleAuthorImageImg />
                            </S.ArticleAuthorImage>
                            <S.AuthorCont>
                                <Link to="/seller">
                                    <S.AuthorName>Кирилл</S.AuthorName>
                                </Link>
                                <S.AuthorAbout>Продает товары с августа 2021</S.AuthorAbout>
                            </S.AuthorCont>
                        </S.ArticleAuthor>
                    </S.ArticleRightContent>
                </S.ArticleRight>
            </S.ArticleContent>
            <S.ArticleDescriptionBlock>
                    <S.ArticleDescriptionTitle>Описание товара</S.ArticleDescriptionTitle>
                    <S.ArticleDescriptionContent>
                        <S.ArticleDescriptionText>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem hic ipsam libero deleniti voluptates accusantium vitae molestias labore eos ipsum, aliquid ad quae consequuntur facere quis perferendis, impedit sequi expedita tenetur sapiente. Ipsa eum voluptatem, hic nisi veritatis numquam voluptatum inventore qui et sit vitae ducimus nemo ex earum.
                        </S.ArticleDescriptionText>
                    </S.ArticleDescriptionContent>
                </S.ArticleDescriptionBlock>
        </S.ArticleBlock>
        {
            active &&
            <Modal>
                <Reviews />
            </Modal> 
        }
        </> 
    )
}

export default ArticlePage