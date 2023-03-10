import styled from "styled-components";

export const FormLogin = styled.form`
    width: 366px;
    height: auto;
    background-color: #FFFFFF;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 43px 47px 47px 40px;
`

export const FormLogo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 34px;
    background-color: transparent;
`

export const FormLogoImg = styled.img`
    width: 140px;
    height: auto;
`

export const FormInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #D0CECE;
    padding: 8px 1px;

    &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #D0CECE;
    }
`

export const ErrorMessage = styled.div`
    width: 100%;
    height: 30px;
    font-size: 16px;
    font-family: inherit;
    font-weight: 500;
    color: red;
`