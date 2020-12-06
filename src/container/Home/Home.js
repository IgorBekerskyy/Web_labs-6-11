import React from 'react';
import {Advertisment, AdvertismentTitle, AdvertismentText, ShowMoreBtn, MostPopular, MostPopularTitle, Cards, Slider, Dots, HomePage} from './Home.styled'
import {ReactComponent as Line } from "./../../icons/line.svg";
import {ReactComponent as LeftBtn } from "./../../icons/LeftBtn.svg";
import {ReactComponent as RightBtn } from "./../../icons/RightBtn.svg";
import {ReactComponent as ActiveDot } from "./../../icons/ActiveDot.svg";
import {ReactComponent as Dot } from "./../../icons/Dot.svg";
import kyiv from "./../../icons/34200.jpg";
import karpaty from "./../../icons/83ed9178f6d0cccf5cf63ce3e31e6c4c.jpg";
import CardItem from '../../components/CardItem/CardsItem.js'

const data = [
    {
        placePhoto: kyiv,
        name: 'Kyiv',
        time: 'night',
        priceInUAH: 2500,
        height: 2000,
    },
    {
        placePhoto: karpaty,
        name: 'Karpaty',
        time: 'afternoon',
        priceInUAH: 3500,
        height: 3000,
    },
];

const Home = () => { 
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
                    <p>The most popular landscapes</p>
                    <Line/>
                </MostPopularTitle>
                <Cards>
                    {data.map(({placePhoto, name, time, priceInUAH, height }, idx) => (
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
                <Slider>
                    <LeftBtn/>
                    <Dots>
                        <ActiveDot/>
                        <Dot/>
                        <Dot/>
                        <Dot/>
                    </Dots>
                    <RightBtn/>
                </Slider>
            </MostPopular>
        </HomePage>);
};

export default Home;