import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const PageMenu = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 11px 0;        
    width: 100%;        
    padding: 31px 10px 64px;
`

export const ButtonBox = styled(NavLink)`
    margin-left: 60px;        
    max-width: 1044px;
    width: 100%; 
`