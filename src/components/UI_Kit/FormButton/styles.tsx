import styled from "styled-components";

type ButtonId = {
    id: string
} 

export const FormButton = styled.button<ButtonId>`
    width: 278px;
    height: 52px;
    background-color: ${props => props.id === 'SignUp' ? 'transparent' : '#009EE4'};
    border-radius: 6px;
    margin-top: 30px;
    border: ${props => props.id === 'SignUp' ? '1px solid #D0CECE' : 'none'};
    color: ${props => props.id === 'SignUp' ? '#000000' : '#FFFFFF'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
`