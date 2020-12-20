
import React, {useEffect, useState} from 'react';
import {ItemOuter, Item, BootsPhoto, Photo, VisitedPage, Line, VisitedInfo, BootsInfo, ItemHeader, ItemTitle,  ItemDescription, TimeSelect, TimeForm, LabelForTime, BuyBlock, BootsPrice, GoBachBtn, AddToCartBtn} from "./ItemPage.styled"
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../Catalog/Catalog';

const options = [
    {
        time: "10",
        value: 10,
    },
    {
        time: "12",
        value: 12,
    },
    {
        time: "14",
        value: 14,
    },
    {
        time: "16",
        value: 16,
    },
    {
        time: "18",
        value: 18,
    },
    {
        time: "20",
        value: 20,
    },
    {
        time: "22",
        value: 22,
    },
    {
        time: "23",
        value: 23,
    }
    ];

var num = 0;

const ItemPage = () => {
    let history = useHistory();
    const location = useLocation();
    const [itm, setItm] = useState({});
    const [count, setCount] = useState(num);
    
    useEffect(() => {
        const id = parseInt(location.search.split("=")[1]);
        const elem = data.find((item) => item.id===id);
        console.log(elem);
        setItm(elem);
        setCount(count + 1);
    },[location]);

    const goBack = () => {
        history.push(`/catalog`);
    }
    
    return(
        <ItemOuter>
                    <Item
                        placePhoto={itm.placePhoto}
                        name={itm.name}
                        time={itm.time}
                        priceInUAH={itm.priceInUAH}
                        height={itm.height}                       
                        id={itm.id}>
                            <BootsPhoto>
                                <Photo src={itm.placePhoto}></Photo>
                                <VisitedPage><Line/><VisitedInfo>This journey has been already looked for <h5>{count}</h5> times</VisitedInfo><Line/></VisitedPage>
                            </BootsPhoto>
                            <BootsInfo>
                                <ItemHeader>
                                    <ItemTitle>Planes</ItemTitle>                                   
                                </ItemHeader>
                                <ItemDescription> {itm.name} {itm.time} landscapes, with height in metres {itm.height}. </ItemDescription>
                                <TimeForm>
                                    <TimeSelect id="time_input">
                                        {options.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                        ))}
                                    </TimeSelect>
                                    <LabelForTime for="time_input">Time</LabelForTime>
                                </TimeForm>
                                <BuyBlock>
                                    <BootsPrice> ${itm.priceInUAH} </BootsPrice>
                                    <GoBachBtn onClick={goBack}>Go back</GoBachBtn>
                                    <AddToCartBtn>Add to cart</AddToCartBtn>
                                </BuyBlock>
                            </BootsInfo>
                    </Item>
        </ItemOuter>
    );
};

export default ItemPage;