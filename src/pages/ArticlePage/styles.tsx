import styled from "styled-components";

export const ArticleBlock = styled.div`
    max-width: 1178px;
    padding: 0 0 70px;
    margin: 0 auto;
    padding: 0 5px 70px;
`

export const ArticleContent = styled.div`
    display: flex;        
    align-items: top;
    justify-content: flex-start;
`

export const ArticleLeft = styled.div`
    max-width: 480px;        
    margin-right: 54px;
`

export const ArticleFillImg = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArticleImage = styled.div`
    width: 480px;
    height: 480px;        
    background-color: #F0F0F0;
    margin: 0 5px;
`

export const ArticleImageImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
`

export const ArticleImageBar = styled.ul`
    margin-top: 30px;
    width: 490px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    overflow: hidden;
    margin-left: -5px;
`

export const ArticleImageBarItem = styled.li`
    width: 88px;
    min-width: 88px;
    height: 88px;
    background-color: #F0F0F0;
    border: 2px solid #F0F0F0;
    margin: 0 5px;
`

export const ArticleImageBarItemImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
`

export const ArticleRight = styled.div`
    max-width: 621px;
`
export const ArticleRightContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const ArticleTitle = styled.h3`
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 10px;
`

export const ArticleInfo = styled.div`
    margin-bottom: 34px;
`
export const ArticleDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 4px;
`
export const ArticleCity = styled(ArticleDate)``

export const ArticleLink = styled.button`
    font-size: 16px;
    line-height: 21px;
    color: #009EE4;
    background: transparent;
    border: none;
    outline: none;  
`

export const ArticlePrice = styled.p`
    font-size: 28px;
    line-height: 39px;
    font-weight: 700;
    margin-bottom: 20px;
`

export const ArticleAuthor = styled.div`
    margin-top: 34px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const ArticleAuthorImage = styled.div`
    width: 40px;
    height: 40px;
    background-color: #F0F0F0;
    border-radius: 50%;
`

export const ArticleAuthorImageImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
`

export const AuthorCont = styled.div`
    margin-left: 12px;
`

export const AuthorName = styled.p`
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    color: #009EE4;
`

export const AuthorAbout = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #5F5F5F;
`

export const ArticleDescriptionBlock = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 5px;
`

export const ArticleDescriptionTitle = styled.h3`
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 32px;
    margin-top: 64px;
    padding: 0 5px;
`

export const ArticleDescriptionContent = styled.div`
    max-width: 792px;
    width: 100%;
    padding: 0 5px 117px;
`

export const ArticleDescriptionText = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`