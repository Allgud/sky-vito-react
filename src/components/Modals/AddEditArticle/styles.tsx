import styled from "styled-components";

const FormBlockElement = `
    padding: 13px 19px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1; 
`

export const AddEditContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 600px;
    height: auto;
    padding: 32px 50px 42px;
    background-color: #FFFFFF;
    border-radius: 12px;
    position: relative;
`

export const AddEditTitle = styled.h3`
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
`

export const AddEditForm = styled.form`
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const FormBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const FormBlockLabel = styled.label`
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`

export const FormBlockInputPrice = styled.input`
    ${FormBlockElement}
`

export const FormBlockInput = styled.input`
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    ${FormBlockElement}

    ::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004D;
    }
`

export const FormBlockArea = styled.textarea`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-height: 200px;
    font-size: 16px;
    line-height: 24px;
    ${FormBlockElement}

    ::placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004D;
    }
`

export const ImagesTitle = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #000000; 
    margin-bottom: 10px;
`

export const ImagesTitleSpan = styled.span`
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.3);
`

export const ImagesBar = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    overflow: hidden;
`