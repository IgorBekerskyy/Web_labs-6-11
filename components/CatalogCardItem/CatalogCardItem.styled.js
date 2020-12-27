
import styled from 'styled-components'

export const CardContainer = styled.div`
    :hover{
        transform: scale(1.02);
        box-shadow: 5px 4px 20px rgba(33, 131, 120, 0.25);
    }
    
    height: 435px;
    width: 270px;
    border-radius: 27px;
    border: none;
    background-color: #FFFFFF;
    margin: 20px 15px;
`;

export const BootsPhoto = styled.img`
    height: 180px;
    width: auto;
    border-radius: 20px 20px 0 0;
    border: none;
`;

export const CardInfo = styled.div`
    height: 225px;
    width: auto;
    border-radius: 0 0 20px 20px;
    border: none;
    padding: 5px 24px 25px; 
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
    background-color: #FFFFFF;
    padding: 12px 30px;
    border: 2px solid transparent;
    border-radius: 16px;
    border-color: #218378;
    color: #218378;
    font-size: 20px;
    margin: 0;
`;