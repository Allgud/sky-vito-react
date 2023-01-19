import styled from "styled-components";

export const ModalBtnClose = styled.div`
    width: 23px;
    height: 23px;
    position: absolute;
    top: 47px;
    right: 50px;
    z-index: 3;
    cursor: pointer;
`

export const ModalBtnCloseLine = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    ::after,
    ::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #D9D9D9;
        top: 47%;
        right: -4px;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
`