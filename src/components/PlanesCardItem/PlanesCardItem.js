import React from 'react';
import {CardContainer, PlanesPhoto, CardInfo, CardTitle, CardDescription, Price, ShopNowBtn} from './PlanesCardItem.styled';

const PlanesCardItem = ({placePhoto, name, time, height, priceInUAH}) => {
    return (
        <CardContainer>
            <PlanesPhoto src={placePhoto}/>
            <CardInfo>
                <CardTitle>Journey</CardTitle>
                <CardDescription> {name} {time} landscape, with height of flight {height} metres. </CardDescription>
                <Price>$ {priceInUAH}</Price>
                <ShopNowBtn>Reserve</ShopNowBtn>
            </CardInfo>
        </CardContainer>
    );
};

export default PlanesCardItem;