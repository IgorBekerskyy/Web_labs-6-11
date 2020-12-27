

import styled from 'styled-components'

export const CardContainer = styled.div`
    :hover{
        transform: scale(1.02);
        box-shadow: 5px 4px 30px rgba(33, 131, 120, 0.3);
    }
    margin-bottom: 20px;
    height: 350px;
    width: 500px;
    border-radius: 27px;
    display: flex;
    border: none;
    background-color: #FFFFFF;
`;

export const PlanesPhoto = styled.img`
    height: auto;
    width: 250px;
    border-radius: 27px 0 0 27px;
    border: none;
`;

export const CardInfo = styled.div`
    height: auto;
    width: auto;
    border-radius: 0 27px 27px 0;
    border: none;
    padding: 45px 30px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardTitle = styled.h2`
    font-size: 34px;
    font-weight: normal;
    color:#000000;
    margin: 0;
`;

export const CardDescription = styled.p`
    font-size: 16px;
    font-weight: lighter;
    color: #8E8E93;
    margin: 0;
`;

export const Price = styled.p`
    font-size: 34px;
    font-weight: bold;
    color:#000000;
    margin: 0;
`;

export const ShopNowBtn = styled.button`
    :hover{
        color: #FFFFFF;
        background: #218378;
        cursor: pointer;
    }
    margin-bottom: 45px;
    background-color: #FFFFFF;
    padding: 12px 30px;
    border: 2px solid transparent;
    border-radius: 16px;
    border-color: #218378;
    color: #218378;
    font-size: 20px;
    margin: 0;
`;
