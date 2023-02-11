import styled from "styled-components";

type VisibleProp = {
    $visible: boolean
}

export const AddImageButtonBlock = styled.div<VisibleProp>`
    width: 90px;
    height: 90px;
    margin-right: 10px;
    position: relative;
    display: ${props => props.$visible ? 'block' : 'none'}
`

export const AddImageButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: #F0F0F0;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #F0F0F0;
    z-index: 1;

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

export const ImagesBarItemCover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #F0F0F0;
    z-index: 1;

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

export const AddPictureInput = styled.input`
    width: 0;
    height: 0;
    opacity: 0; 
    overfow: hidden; 
`