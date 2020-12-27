
import React, {useEffect, useState} from 'react';
import {ItemOuter, Item, BootsPhoto, Photo, VisitedPage, Line, VisitedInfo, BootsInfo, ItemHeader, ItemTitle, VampMaterial, VampIcon, ToecapType, ToecapIcon, ItemDescription, SizeSelect, SizeForm, LabelForSize, BuyBlock, BootsPrice, GoBachBtn, AddToCartBtn} from "./ItemPage.styled"
import { useLocation, useHistory } from 'react-router-dom';
import karpaty from "./../../icons/83ed9178f6d0cccf5cf63ce3e31e6c4c.jpg";
import kyiv from "./../../icons/Kyiv.png";
import lviv from "./../../icons/catalog/lviv.jpg";
import Svityaz from "./../../icons/catalog/svityaz.jpg";
import {getPlanesById} from '../Catalog/GetMethod';
import { useDispatch } from "react-redux";
import { addItem } from "../ReduxMethods/action";

const options = [
    {
        persons: "3",
        value: 3,
    },
    {
        persons: "4",
        value: 4,
    },
    {
        persons: "5",
        value: 5,
    },
    {
        persons: "6",
        value: 6,
    },
    ];

let num = 0;

const ItemPage = () => {
    let history = useHistory();
    const location = useLocation();
    const [itm, setItm] = useState({});
    const [count, setCount] = useState(num);
    const [planesToShow, setPlanesToShow] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const id = parseInt(location.search.split("=")[1]);
        if (planesToShow.length === 0){
            getPlanesById(id).then( (e) => {
                setItm(e);
            });
        }
        setCount(count + 1);
    },[location]);

    const goBack = () => {
        history.push(`/catalog`);
    }
    
    const addItemToCart = () => {
        dispatch( addItem({
            id: itm.id,
            priceInUAH: itm.priceInUAH,
            number: 1,
        }));
    };

    return(
        <ItemOuter>
                    <Item>
                            <BootsPhoto>
                                <Photo src={kyiv}></Photo>
                                <VisitedPage><Line/><VisitedInfo>This journey has been  looked  <h5>{count}</h5> times</VisitedInfo><Line/></VisitedPage>
                            </BootsPhoto>
                            <BootsInfo>
                                <ItemHeader>
                                    <ItemTitle>Journey</ItemTitle>                                   
                                </ItemHeader>
                                <ItemDescription> {itm.name} {itm.time} landscapes, with height in metres {itm.height}. </ItemDescription>
                                <SizeForm>
                                    <SizeSelect id="sizeEURstandart_input">
                                        {options.map((option) => (
                                        <option value={option.value}>{option.persons}</option>
                                        ))}
                                    </SizeSelect>
                                    <LabelForSize for="sizeEURstandart_input">Number of persons</LabelForSize>
                                </SizeForm>
                                <BuyBlock>
                                    <BootsPrice> ${itm.priceInUAH} </BootsPrice>
                                    <GoBachBtn onClick={goBack}>Go back</GoBachBtn>
                                    <AddToCartBtn onClick={addItemToCart}>Add to cart</AddToCartBtn>
                                </BuyBlock>
                            </BootsInfo>
                    </Item>
        </ItemOuter>
    );
};

export default ItemPage;