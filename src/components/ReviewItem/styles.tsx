import styled from "styled-components";

export const ReviewListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 15px 0;
`

export const ReviewItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`

export const ReviewLeft = styled.div`
    margin-right: 12px;
`

export const ReviewImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #F0F0F0;
`

export const ReviewImageImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
`

export const ReviewRight = styled.div`
    display: block;
`

export const ReviewText = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #000000;
`

export const ReviewName = styled(ReviewText)`
    margin-bottom: 12px;
    font-weight: 600;
`

export const ReviewDate = styled.span`
    margin-left: 10px;
    color: #5F5F5F;
`

export const ReviewTitle = styled.h5`
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #000000;
`
