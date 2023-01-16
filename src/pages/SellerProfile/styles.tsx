import styled from "styled-components";

export const SellerProfileCont = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 10px 79px;
`

export const SellerProfileCenter = styled.div`
    margin: 0 auto;
`

export const ProfileSell = styled.div`
    width: 100%;
    padding: 0 0 70px;
`

export const ProfileSellContent = styled.div`
    width: 100%;
`

export const ProfileSellSeller = styled.div`
    display: flex;        
    align-items: top;
    justify-content: flex-start;
`

export const SellerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
`

export const SellerImage = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #F0F0F0;
`

export const SellerImageImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
`

export const SellerRight = styled.div`
    width: auto;
`

export const SellerTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    color: #000000;
    margin-bottom: 0px;
`

export const SellerInfo = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 10px;
`

export const SellerCity = styled(SellerInfo)``