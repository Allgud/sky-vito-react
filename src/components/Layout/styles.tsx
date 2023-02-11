import styled from "styled-components";

type FixedLayout = {
    $active: boolean
}

export const Wrapper = styled.div<FixedLayout>`
    width: 100%;    
    min-height: 100%;
    overflow-y: hidden;
    background-color: #F1F1F1;
    display: flex;
    flex-direction: column;
    position: ${props => props.$active && 'fixed'};
    
`

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;        
    margin: 0 auto;    
    background-color: #FFFFFF;
`

export const Main = styled.main``