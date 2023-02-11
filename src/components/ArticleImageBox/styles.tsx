import styled from "styled-components";

type ImgItemProps = {
    $active: boolean
}

export const ImageBox = styled.div`
    max-width: 480px;        
    margin-right: 54px;
`

export const ImageBoxContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainImage = styled.div`
    width: 480px;
    height: 480px;        
    background-color: #F0F0F0;
    margin: 0 5px;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
`

export const ImageBar = styled.ul`
    margin-top: 30px;
    width: 490px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    overflow: hidden;
    margin-left: -5px;
`

export const ImageBarItem = styled.li<ImgItemProps>`
    width: 88px;
    min-width: 88px;
    height: 88px;
    background-color: #F0F0F0;
    margin: 0 5px;
    border: ${props => props.$active ? '2px solid #009EE4' : '2px solid #F0F0F0'};

    :hover {
        border: 2px solid #009EE4;
    }
`
