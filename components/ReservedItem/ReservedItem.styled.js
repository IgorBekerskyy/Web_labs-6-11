import styled from 'styled-components';

const minus = require("./../../icons/minus.png").default;
const plus = require("./../../icons/plus.png").default;

export const ReservedItemContainer = styled.div`
    border-bottom: 0.75px solid transparent;
    padding: 15px 40px;
    border-color: #218378;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PlanesPhoto = styled.img`
    width: 150px;
    height: 100px;
    border-radius: 15px;
`;

export const ReservedItemTitle = styled.h1`
    font-size: 24px;
    font-weight: normal;
`;

export const ItemsCounter = styled.div`
    display: flex;
    align-items: center;
    div{
        height: 44px;
        width: 1.25px;
        background-color: #218378;
        margin: 0 20px;
    }
    button{
        width: 50px;
        height: 50px;
        border-radius: 20px;
        background-color: #F6F6F6;
        background-position-x: center;
        background-position-y: center;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
    }
`;

export const ReservedItemPrice = styled.p`
    font-size: 28px;
    color: #8E8E93;
`;

export const DecreseBtn = styled.button`
    background-image: url(${minus});
`;

export const Counter = styled.p`
    font-size: 28px;
    color: #000000;
`;

export const IncreaseBtn = styled.button`
   background-image: url(${plus});
`;