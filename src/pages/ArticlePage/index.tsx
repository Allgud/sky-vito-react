import * as S from './styles'
import PageMenu from '../../components/PageMenu'
import ArticleImageBox from '../../components/ArticleImageBox'
import ShowPhoneButton from '../../components/UI_Kit/ShowPhoneButton'
import UserArticleButtons from '../../components/UserArticleButtons'
import { Link } from 'react-router-dom'
import useModal from '../../hooks/useModal'
import { MouseEvent } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { dateFormatter, sellsFromFormat } from '../../helpers'

const ArticlePage = () => {
    const { getModal } = useModal()
    const { currentGood, comments } = useAppSelector(state => state.ads) 
    const isUserArticle = false

    const handleClick = (evt:MouseEvent) => {
        getModal(evt)
    }

    return (
        <S.ArticleBlock>
            <PageMenu />
            <S.ArticleContent>
                <ArticleImageBox />
                <S.ArticleRight>
                    <S.ArticleRightContent>
                        <S.ArticleTitle>{currentGood && currentGood.title}</S.ArticleTitle>
                        <S.ArticleInfo>
                            <S.ArticleDate>{currentGood && dateFormatter(currentGood.created_on)}</S.ArticleDate>
                            <S.ArticleCity>{currentGood && currentGood.user.city}</S.ArticleCity>
                            <S.ArticleLink
                                id='reviews' 
                                onClick={(evt) => handleClick(evt)}
                            >
                                {comments.length} отзывов
                            </S.ArticleLink>
                        </S.ArticleInfo>
                        <S.ArticlePrice>{currentGood && currentGood.price} ₽</S.ArticlePrice>
                        {
                            isUserArticle 
                            ? <UserArticleButtons />
                            : <ShowPhoneButton phone={currentGood && currentGood.user.phone}/>  
                        }
                        <S.ArticleAuthor>
                            <S.ArticleAuthorImage>
                                <S.ArticleAuthorImageImg />
                            </S.ArticleAuthorImage>
                            <S.AuthorCont>
                                <Link to="/seller">
                                    <S.AuthorName>{currentGood && currentGood.user.name}</S.AuthorName>
                                </Link>
                                <S.AuthorAbout>{`Продаёт товары с ${currentGood?.user.sells_from && sellsFromFormat(currentGood?.user.sells_from)}`}</S.AuthorAbout>
                            </S.AuthorCont>
                        </S.ArticleAuthor>
                    </S.ArticleRightContent>
                </S.ArticleRight>
            </S.ArticleContent>
            <S.ArticleDescriptionBlock>
                    <S.ArticleDescriptionTitle>Описание товара</S.ArticleDescriptionTitle>
                    <S.ArticleDescriptionContent>
                        <S.ArticleDescriptionText>
                           {currentGood && currentGood.description}
                        </S.ArticleDescriptionText>
                    </S.ArticleDescriptionContent>
                </S.ArticleDescriptionBlock>
        </S.ArticleBlock>
    )
}

export default ArticlePage