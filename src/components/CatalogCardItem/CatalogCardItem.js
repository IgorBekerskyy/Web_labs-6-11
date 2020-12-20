import React from 'react';
import {CardContainer, BootsPhoto, CardInfo, CardTitle, CardDescription, Price, ShopNowBtn} from './CatalogCardItem.styled';
import {useHistory} from 'react-router-dom';

const CatalogCardItem = ({placePhoto, name, time, height, priceInUAH, id}) => {
    let history = useHistory();

    const goToItem = () => {
        history.push(`/item?id=`+ id);
    }

    return (
        <CardContainer>
            <BootsPhoto src={placePhoto}/>
            <CardInfo>
                <CardTitle>Journey</CardTitle>
                <CardDescription> {name} {time} landscapes, with height in metres {height}. </CardDescription>
                <Price>$ {priceInUAH}</Price>
                <ShopNowBtn onClick={goToItem}>Reserve now</ShopNowBtn>
            </CardInfo>
        </CardContainer>
    );
};

export default CatalogCardItem;
