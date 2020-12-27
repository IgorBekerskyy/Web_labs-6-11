
import styled from 'styled-components';

export const ItemOuter = styled.div`
    padding: 30px 80px;
    background-color: #F6F6F6;
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    height: 380px;
`;

export const BootsPhoto = styled.div`
    width: 448px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Photo = styled.img`
    width: 100%;
    height: auto;
    border-radius: 40px;
`;

export const VisitedPage = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

export const Line =styled.div`
    width: 100%;
    height: 2px;
    background-color: #1F766C;
    margin: 10px auto;
`;

export const VisitedInfo =styled.div`
    display: flex;
    align-items: center;
    color: #8E8E93;
    font-size: 16px;
     h5{
        color: #218378 !important;
        font-size: 20px;
        margin: 0 7px;
    } 
`;

export const BootsInfo =styled.div`
    width: 560px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 0;
`;

export const ItemHeader =styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 35px;
        color: #000000;
        margin: 0;
    }
    div{
        height: 30px;
        border-radius: 15px;
        padding: 0 15px;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            height: 24px;
            width: auto;
            padding-right: 10px;
        }
    }
`;

export const ItemTitle = styled.h1`
`;

export const VampMaterial = styled.div`
    background-color: #A37A58;
`;

export const VampIcon = styled.img`
`;

export const ToecapType = styled.div`
    background-color: #218378;
`;

export const ToecapIcon = styled.img`
`;

export const ItemDescription = styled.p`
    color: #8E8E93;
    font-size: 24px;
`;

export const SizeForm = styled.form`
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const SizeSelect = styled.select`
    color: #000000;
    font-size: 20px;
    width: 150px;
    height: 44px;
    border: 4px solid transparent;
    border-color: #218378;
    border-radius: 12px;
    padding-left: 20px;
`;

export const LabelForSize = styled.label`
    color: #8E8E93;
    font-size: 24px;
`;

export const BuyBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        :hover{
        transform: scale(1.02);
        cursor: pointer;
    }
    
    padding: 12px 30px;
    border-radius: 16px;
    font-size: 20px;
    margin: 0;
    }
`;

export const BootsPrice = styled.h2`
    font-size: 44px;
    color: #000000;
`;

export const GoBachBtn = styled.button`
    border: 2px solid transparent;
    background-color: #F6F6F6;
    border-color: #218378;
    color: #218378;
`;

export const AddToCartBtn = styled.button`
    border: 2px solid transparent;
    background-color: #218378;
    border-color: #218378;
    color: #FFFFFF;
`;