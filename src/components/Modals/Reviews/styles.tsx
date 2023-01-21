import styled from "styled-components";

export const ReviewsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 800px;
    height: auto;
    padding: 20px 92px 57px 50px;
    background-color: #FFFFFF;
    border-radius: 12px;
    position: relative;
`

export const ReviewsTitle = styled.h3`
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 15px;
`

export const CloseBtn = styled.div`
    idth: 23px;
    height: 23px;
    position: absolute;
    top: 47px;
    right: 50px;
    z-index: 3;
    cursor: pointer;
`

export const BtnCloseLine = styled.div`
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

        &:hover {
            background-color: #0080C1;
        }
    }

    ::before {
        transform: rotate(45deg);
    }

    ::after {
        transform: rotate(-45deg);
    }
`

export const ReviewsScroll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    overflow-y: auto;
    scrollbar-color: #FFFFFF #2E2E2E; // Firefox
    scrollbar-width: thin; // Firefox
    scrollbar-width: 0px; // Firefox

    ::-webkit-scrollbar {
        width: 0px;
        background-color: #FFFFFF;

    }

    ::-webkit-scrollbar-thumb {
        background-color: #D9D9D9;
        border-radius: 0px;
    }
`

export const NewArtForm = styled.form`
    margin-top: 5px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const NewArtBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
`

export const ArtBlockLabel = styled.label`
    margin-bottom: 14px;
    font-size: 16px;
    line-height: 32px;
    font-weight: 600;
    color: #000000;
`

export const ArtBlockArea = styled.textarea`
    font-family: 'Roboto', sans-serif;
    padding: 10px 19px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 100px;
    max-height: 100px;

    ::placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004D;;
    }
`

export const ReviewsList = styled.ul`
    width: 100%;
    height: 495px;
`