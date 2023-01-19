import * as S from './styles'

const ArticleImageBox = () => {

    return (
        <S.ImageBox>
            <S.ImageBoxContent>
                <S.MainImage>
                    <S.Image />
                </S.MainImage>
                <S.ImageBar>
                    <S.ImageBarItem>
                        <S.Image />
                    </S.ImageBarItem>
                </S.ImageBar>
            </S.ImageBoxContent>
        </S.ImageBox>
    )
}

export default ArticleImageBox