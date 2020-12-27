import React, {useState, useEffect} from 'react';
import ReservedItem from '../../components/ReservedItem/ReservedItem';
import {CartOuter, ShoppingCartTitle, Purches, Buy, TotalAmount, TotalAmountTitle, Price, CartButtons, BackToCatalogBtn, ContinueBtn} from '../Cart/Cart.styled';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
    let history = useHistory();
    const select = useSelector((state) => state);

    const goBack = () => {
        history.push(`/catalog`);
    }

    const goToCheckout = () => {
        history.push(`/checkout`);
    }

    return(
        <CartOuter>
            <ShoppingCartTitle>Journey cart</ShoppingCartTitle>
            <Purches>
                {select.reservations.map((value) => {
                    return <ReservedItem value={value}/>
                })}
            </Purches>
            <Buy>
                <TotalAmount>
                    <TotalAmountTitle>Total price :</TotalAmountTitle>
                    <Price>${select.totalPrice}</Price>
                </TotalAmount>
                <CartButtons>
                    <BackToCatalogBtn onClick={goBack}>Back to catalog</BackToCatalogBtn>
                    <ContinueBtn onClick={goToCheckout}>Go on</ContinueBtn>
                </CartButtons>
            </Buy>
        </CartOuter>
    );
}

export default Cart;