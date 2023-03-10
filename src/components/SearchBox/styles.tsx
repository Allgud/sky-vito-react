import styled from "styled-components";

export const SearchContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 0;        
    max-width: 1178px;
    margin: 0 auto;
    padding: 31px 10px 0px;
`

export const SearchForm = styled.form`
    margin-left: 60px;        
    max-width: 1044px;
    width: 100%;
    display: flex;
    gap: 10px;
`

export const SearchInput = styled.input`
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;

    background-color: transparent;
    padding: 13px 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;

    &::placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;            
    }
`