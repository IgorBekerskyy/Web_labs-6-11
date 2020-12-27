
import React, {useState, useEffect} from 'react';
import CatalogCardItem from '../../components/CatalogCardItem/CatalogCardItem';
import { CatalogOuter, Input, IconMore, Forms, Cards, SearchBtn, SearchForm, InputSearch, FilterForm, NewFunctions, InputFilterForms, ByPrice, ByHight, FormHead, MinPrice, MaxHight, MaxPrice, MinHight, ApplyBtn, Loader } from '../Catalog/Catalog.styled';
import karpaty from "./../../icons/83ed9178f6d0cccf5cf63ce3e31e6c4c.jpg";
import kyiv from "./../../icons/Kyiv.png";
import lviv from "./../../icons/catalog/lviv.jpg";
import Svityaz from "./../../icons/catalog/svityaz.jpg";
import more from "./../../icons/catalog/more-filter.jpg";
import getAllPlanes, {getAllPlanesByPriceAndHight} from './GetMethod';
import ScaleLoader from "react-spinners/ScaleLoader";

const Catalog = () => {
    const [checkFiltr, setCheckFilter] = useState(false);
    const [title, setTitle] = useState('');
    const [minPrice, setMinPrice] = useState('20');
    const [maxPrice, setMaxPrice] = useState('5000');
    const [minHight, setMinHight] = useState('1000');
    const [maxHight, setMaxHight] = useState('6000');
    let [itemsToShow, setItemsToShow] = useState([]);

    const search = (input) => {
        setItemsToShow(itemsToShow.filter((item) => (item.name.toLowerCase().includes(input) || item.time.toLowerCase().includes(input)) ));
    };

    const filter = (minPrice, maxPrice, minHight, maxHight) => {
        getAllPlanesByPriceAndHight(minPrice, maxPrice, minHight, maxHight).then( (e) => {
            setItemsToShow(e);
        });
    }

    useEffect( () => {
        if (itemsToShow.length === 0){
            getAllPlanes().then( (e) => {
                setItemsToShow(e);
            });
        }
    });
    
    return(
        <CatalogOuter>
            <Forms>
                <FilterForm>
                    <FormHead>
                        <h3>Filter by: </h3>
                        <Input type="checkbox" id="check" onChange={() => setCheckFilter(!checkFiltr)}></Input>
                        <label for="check">
                            <i><IconMore src={more} check={checkFiltr}/></i>
                        </label>
                    </FormHead>
                   
                    <NewFunctions check={checkFiltr}>
                    { checkFiltr&&
                    <InputFilterForms> 
                        <h4>Price: </h4> 
                        <ByPrice>
                            <MinPrice type="text" placeholder="min price" defaultValue = "20" onChange={event => setMinPrice(event.target.value)}/> <br/>
                            <MaxPrice type="text" placeholder="max price" defaultValue = "5000" onChange={event => setMaxPrice(event.target.value)}/> <br/>
                        </ByPrice>   
                        <h4>Hight of shafl: </h4>
                        <ByHight>
                            <MinHight type="text" placeholder="min hight" defaultValue = "1000" onChange={event => setMinHight(event.target.value)}/> <br/>
                            <MaxHight type="text" placeholder="max hight" defaultValue = "6000" onChange={event => setMaxHight(event.target.value)}/> <br/>
                        </ByHight> 
                        <ApplyBtn type="button" onClick={() => filter(minPrice, maxPrice, minHight, maxHight)}>Apply</ApplyBtn>
                    </InputFilterForms>
                    }
                    </NewFunctions>
                    
                </FilterForm>
                <SearchForm>
                    <InputSearch type="text" id="input" placeholder="Search by name and time" value={title} onChange={event => setTitle(event.target.value)} /> <br/>
                    <SearchBtn onClick={() => search(title)}></SearchBtn>
                </SearchForm>
            </Forms>
            {itemsToShow.length!==0 ? (
                <Cards>
                {itemsToShow.map((item, idx) => (
                    <CatalogCardItem
                        placePhoto={kyiv}
                        name={item.name}
                        time={item.time}
                        priceInUAH={item.priceInUAH}  
                        height={item.height}                     
                        id={item.id}
                        key={idx}
                    />
                ))}
            </Cards>
            ) : (<Loader>
                <ScaleLoader color={"#218378"}/>
            </Loader>)}
        </CatalogOuter>
    );
};

export default Catalog;