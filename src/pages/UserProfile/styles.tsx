import styled from "styled-components";
import { MainContainer } from "../MainPage/styles";

export const ProfileContainer = styled(MainContainer)`
    padding: 0px 10px 79px;
`

export const ProfileCenterBlock = styled.div``

export const ProfileBlock = styled.div`
    width: 100%;
    padding: 0 0 70px;
`

export const ProfileContent = styled.div`
    max-width: 834px;
`

export const ProfileContentTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: #000000;
`

export const ProfileSettings = styled.div`
    display: flex;        
    align-items: top;
    justify-content: center;
`

export const SettingsLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 43px;
    
`

export const ProfileImage = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #F0F0F0;
    overflow: hidden;
`

export const ProfileImageImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
`

export const ChangeImgBtnButton = styled.button`
    background: transparent;
    border: none;
    font-family: inherit;
    font-size: 16px;
    line-height: 24px;
    color: #009EE4;
    margin-top: 10px;
    margin-bottom: 30px;
`

export const ChangeImgInput = styled.input`
    width: 0;
    height: 0;
    opacity: 0; 
    overfow: hidden; 
`

export const SettingsRight = styled.div`
    width: 630px;
`

export const SettingsForm = styled.form`
    width: 630px;
    display: flex;
    flex-wrap: wrap;
`

export const SettingsDiv = styled.div`
    display: inline-block;
    margin: 0 7px 20px;
`

export const SettingsInput = styled.input`
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
    width: 300px;

    &::placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`

export const PhoneSettingsInput = styled(SettingsInput)`
    width: 614px;
    margin-bottom: 10px;
`

export const SettingsInputLabel = styled.label`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #C4C4C4;
    margin-bottom: 4px;
    display: block;
`