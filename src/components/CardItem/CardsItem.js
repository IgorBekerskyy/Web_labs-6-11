import React from 'react';
import {CardContainer, BootsPhoto, CardInfo, CardTitle, CardDescription, Price, ShopNowBtn} from './CardsItem.styled';

const CardItem = ({placePhoto, name, time, height, priceInUAH}) => {
    return (
        <CardContainer>
            <BootsPhoto src={placePhoto}/>
            <CardInfo>
                <CardTitle>Journey</CardTitle>
                <CardDescription> {name} {time} landscape, with height of flight {height} metres. </CardDescription>
                <Price>$ {priceInUAH}</Price>
                <ShopNowBtn>Reserve</ShopNowBtn>
            </CardInfo>
        </CardContainer>
    );
};

export default CardItem;
