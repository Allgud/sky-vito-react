import styled from "styled-components";

export const BlockTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 40px;
    font-weight: 500;
    color: #000000;
`

export const CardsList = styled.ul`
    max-width: 1158px;
    width: 100%;    
    display: grid;
    grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 441px;
    grid-gap: 40px 26px;
    justify-content: center;
    overflow-y: auto;
    scrollbar-color: #FFFFFF #2E2E2E; // Firefox
    scrollbar-width: thin; // Firefox
    scrollbar-width: 0px; // Firefox
    height: 441px;

    &::-webkit-scrollbar {
        width: 0px;
        background-color: #009EE4;

    }

    &::-webkit-scrollbar-thumb {
        background-color: #0080C1;
        border-radius: 3px;
    }
`