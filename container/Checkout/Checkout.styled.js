import { Field, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const CheckoutOuter = styled.div`
    padding: 10px 275px;
    background-color: #F6F6F6;
`;

export const CheckoutTitle = styled.h1`
    font-size: 32px;
    color: #000000;
    font-weight: normal;
    text-align: center;
`;

export const FormChecking = styled(Form)`
    width: 800px;    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        label{
            font-size: 20px;
            font-weight: lighter;
            color: #218378;
        }
    }
    
`;

export const FieldInput = styled(Field)`
    height: 38px;
    width: 300px;
    margin-top: 10px;
    padding-left: 20px;
    border: 1px solid transparent;
    border-color: #218378;
    border-radius: 6px;
    background-color: #F6F6F6;
    font-size: 20px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
    margin: 10px 0px;
    padding: 5px 30px 8px ;
    border: 1px solid transparent;
    border-color: #941A5B;
    border-radius: 6px;
    background-color: #F1C1DB;
    font-size: 16px;
    font-weight: lighter;
    color: #941A5B;
    text-align: center;
`;

export const SelectCity = styled.select`
    height: 38px;
    width: 300px;
    margin-top: 10px;
    padding-left: 20px;
    border: 1px solid transparent;
    border-color: #218378;
    border-radius: 6px;
    background-color: #F6F6F6;
    font-size: 20px;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
    margin: 20px 40px;
    width: 800px;    
    button{
        padding: 10px 40px;
        border-radius: 16px;
        border: 2px solid transparent;
        border-color: #218378;
        font-size: 20px;
        cursor: pointer;
    }
`;
export const ContinueButton = styled.button`
    color: #F6F6F6;
    background-color: #218378;
`;

export const GoBachBtn = styled.button`
    color: #218378;
    background-color: #F6F6F6;
`;
