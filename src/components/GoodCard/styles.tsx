import styled from "styled-components";

export const CardItem = styled.li`
    margin: 0;
`

export const Card = styled.div`
    width: 270px;
    height: 441px;        
    display: flex;
    flex-direction: column;
`

export const CardImage = styled.div`
    width: 270px;
    height: 270px;
    background-color: #F0F0F0;
`

export const CardsImageImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover; 
`

export const CardContent = styled.div``

export const CardTitle = styled.h3`
    height: 52px;
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    color: #009EE4;
    margin-bottom: 10px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const CardPrice = styled.p`
    color: #000000;
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    margin-bottom: 10px;
    font-weight: 700;
`

export const CardPlace = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
`

export const CardDate = styled(CardPlace)`
    margin-bottom: 4px;
`