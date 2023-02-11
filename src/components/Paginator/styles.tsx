import styled from "styled-components";

type ItemProp = {
    $active?: boolean,
    $disabled?: boolean
}

export const PaginationBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    margin-bottom: 24px;
`

export const PaginationArrow = styled.div<ItemProp>`
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 24px;
    transform: translateY(10px);
    margin: 0px 16px;
    cursor: pointer;
    color: ${props => props.$disabled ? '#F0F0F0' : '000000'};
`

export const PaginationItemsBlock = styled.ul`
    min-width: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

export const PaginationItem = styled.li<ItemProp>`
    width: 40px;
    height: 40px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: ${props => props.$active ? '#009EE4' : 'transparent'};
    color: ${props => props.$active ? '#FFFFFF' : '#000000'};
    font-weight: 500;
    cursor: pointer;
    transform: translateY(-1.5px);
`