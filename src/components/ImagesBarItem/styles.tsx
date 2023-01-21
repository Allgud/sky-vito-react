import styled from "styled-components";

export const ImagesBarItem = styled.div`
    width: 90px;
    height: 90px;
    margin-right: 10px;
    position: relative;
    z-index: 0;
`

export const ImagesBarItemImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: 2;
`

export const ImagesBarItemCover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #F0F0F0;
    z-index: -1;

    &::after,
    &::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #D9D9D9;
        top: 50%;
        right: calc(50% - (30px/2));

    }

    &::before {
        transform: rotate(90deg);
    }
`