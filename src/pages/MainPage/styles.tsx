import styled from "styled-components";

export const Main = styled.main``

export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 52px 10px 37px;
`

export const MainContent = styled.div`
    width: 100%;
    margin: 0 auto;
`

export const ContentCards = styled.ul`
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
    height: 922px;

    &::-webkit-scrollbar {
        width: 0px;
        background-color: #009EE4;

    }

    &::-webkit-scrollbar-thumb {
        background-color: #0080C1;
        border-radius: 3px;
    }
`