import styled from 'styled-components';

export const CartOuter = styled.div`
    padding: 10px 40px;
    background-color: #F6F6F6;
`;

export const ShoppingCartTitle = styled.h1`
    font-size: 32px;
    font-weight: normal;
    color: #000000;
    margin: 0 auto;
    text-align: center;
`;

export const Purches = styled.div`
    margin-top: 30px;
    border-top: 0.75px solid transparent;
    border-color: #218378;
`;

export const Buy = styled.div`
    margin-left: 850px;
    margin-bottom: 20px;
    width: 420px;
    div{
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
`;

export const TotalAmount = styled.div``;

export const TotalAmountTitle = styled.h3`
    font-size: 28px;
    font-weight: normal;
    color: #000000;
`;

export const Price = styled.p`
    font-size: 32px;
`;

export const CartButtons = styled.div`
    button{
        padding: 10px 40px;
        border-radius: 16px;
        border: 2px solid transparent;
        border-color: #218378;
        font-size: 20px;
        cursor: pointer;
    }
`;

export const BackToCatalogBtn = styled.button`
    color: #218378;
    background-color: #F6F6F6;
`;

export const ContinueBtn = styled.button`
    color: #F6F6F6;
    background-color: #218378;
`;