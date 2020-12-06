import styled from 'styled-components';

const loupe = require("./../../icons/catalog/search.svg").default;

export const CatalogOuter = styled.div`
    background-color: #99FFFF;
`;

export const Cards = styled.div`
    margin: 0 auto;
    padding: 10px 0;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const Forms = styled.div`
    background-color: #99FFFF;
    padding: 7px 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const FilterForm = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormHead = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    h3{
        color: #FFFFFF;
        font-size: 20px;
        margin: 0;
    }
`;

export const Input = styled.input`
    display: none;
`;

export const IconMore = styled.img`
    :hover{
        cursor: pointer;
    }
    transition: all .5s;
    transform: rotateZ(${(props) => (props.check ? "-180deg" : "0")});
`;

export const NewFunctions = styled.div`
    background-color: #1F766C;
    width: 100%;
    transition: all .5s;
    transform: scaleY(${(props) => (props.check ? "1" : "0")});
`;

export const InputFilterForms = styled.form`
    background-color: #4A9088;
    padding: 10px 30px;
    h4{
        color: #FFFFFF;
        font-size: 20px;
        font-weight: normal;
        margin: 0;
    }
    input{
        height: 25px;
        width: 90px;
        border: none;
        border-radius: 6px;
        padding-left: 8px;
        font-size: 15px;
    }
`;
export const ByPrice = styled.div`
    padding: 12px 0;
    width: 320px;
    display: flex;
    justify-content: space-around;
`; 

export const ByHight = styled.div`
    padding: 12px 0;
    width: 320px;
    display: flex;
    justify-content: space-around;
`; 

export const MinPrice = styled.input`
   
`;

export const MaxPrice = styled.input`   
`;

export const MinHight = styled.input` 
`;

export const MaxHight = styled.input` 
`;

export const ApplyBtn = styled.button`
    :hover{
        color: #4A9088;
        background: #FFFFFF;
        cursor: pointer;
    }
    margin-bottom: 45px;
    background-color: #4A9088;
    padding: 8px 40px;
    border: 2px solid transparent;
    border-radius: 16px;
    border-color: #FFFFFF;
    color: #FFFFFF;
    font-size: 20px;
    margin: 10px 80px 0;
`;

export const SearchForm = styled.form`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const InputSearch = styled.input`
    height: 25px;
    width: 180px;
    border-radius: 20px;
    border: none;
    padding-left: 15px;
`;

export const SearchBtn = styled.button`
    height: 35px;
    width: 35px;
    background-color: #FFFFFF;
    background-image: url(${loupe});
    background-position-x: 8px;
    background-position-y: 8px;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: none;
    cursor: pointer;
`;
