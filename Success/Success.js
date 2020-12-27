import React from 'react';
import successPurchase from "./../../icons/good.jpg";
import {SuccessOuter, SuccessImage, SuccessText, SuccessBtn} from '../Success/Success.styled';
import { useHistory } from "react-router-dom";

const Success = () => {
    let history = useHistory();

    const goBack = () => {
        history.push(`/catalog`);
    }

    return(
        <SuccessOuter>
            <SuccessImage src={successPurchase}/>
            <SuccessText>Your order successfully made!</SuccessText>
            <SuccessBtn onClick={goBack}>Come back </SuccessBtn>
        </SuccessOuter>
    );
}

export default Success;