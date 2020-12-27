
import React, {useState, useEffect} from 'react';
import {Advertisment, AdvertismentTitle, AdvertismentText, ShowMoreBtn, MostPopular, MostPopularTitle, Cards, HomePage, ViewMoreBtn} from './Home.styled'
import {ReactComponent as Line } from "./../../icons/line.svg";
import karpaty from "./../../icons/83ed9178f6d0cccf5cf63ce3e31e6c4c.jpg";
import kyiv from "./../../icons/Kyiv.png";
import lviv from "./../../icons/catalog/lviv.jpg";
import Svityaz from "./../../icons/catalog/svityaz.jpg";
import CardItem from './../../components/CardItem/CardsItem'

const data = [
    {
        
        placePhoto: kyiv,
        name: 'Kyiv',
        time: 'night',
        priceInUAH: 2500,
        height: 2500       
    },

    {
        
        placePhoto: lviv,
        name: 'Lviv',
        time: 'morning',
        priceInUAH: 3000,
        height: 2000       
    },

    {
        
        placePhoto: karpaty,
        name: 'Karpaty',
        time: 'evening',
        priceInUAH: 4500,
        height: 2700       
    },

    {
        
        placePhoto: Svityaz,
        name: 'Svityaz',
        time: 'afternoon',
        priceInUAH: 2000,
        height: 2100       
    },
];

const Home = () => { 
    const [itemsToShow, setItemsToShow] = useState(data.slice(0, 2));
    const [isViewMore, setIsViewMore] = useState(false);

    const showMore = () => {
        setItemsToShow(data);
        setIsViewMore(true);
      };

    const showLess = () => {
        setItemsToShow(data.slice(0, 2));
        setIsViewMore(false);
    };
    return(
        <HomePage>
            <Advertisment>
                <AdvertismentTitle>Flights over city </AdvertismentTitle>
                <AdvertismentText>If you want to enjoy the view of Ukrainian cities from a height, click below </AdvertismentText>
                <ShowMoreBtn>Show me more</ShowMoreBtn>
            </Advertisment>
            <MostPopular>
                <MostPopularTitle>
                    <Line/>
                    <p>The MOST popular this season</p>
                    <Line/>
                </MostPopularTitle>
                <Cards>
                    {itemsToShow.map(({placePhoto, name, time, priceInUAH, height }, idx) => (
                        <CardItem
                            placePhoto={placePhoto}
                            name={name}
                            time={time}
                            priceInUAH={priceInUAH}
                            height={height}
                            id={idx}
                        />
                    ))}
                </Cards>
                {!isViewMore && (<ViewMoreBtn onClick={() => showMore()}>View more</ViewMoreBtn>)}
                {isViewMore && (<ViewMoreBtn onClick={() => showLess()}>View less</ViewMoreBtn>)}
            </MostPopular>
        </HomePage>);
};

export default Home;