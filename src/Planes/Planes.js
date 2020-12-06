import React, {useState} from 'react';
import PlanesCardItem from '../../components/PlanesCardItem/PlanesCardItem';
import { CatalogOuter, Input, IconMore, Forms, Cards, SearchBtn, SearchForm, InputSearch, FilterForm, NewFunctions, InputFilterForms, ByPrice, ByHight, FormHead, MinPrice, MaxHight, MaxPrice, MinHight, ApplyBtn } from '../Planes/Planes.styled';
import kyiv from "./../../icons/34200.jpg";
import karpaty from "./../../icons/83ed9178f6d0cccf5cf63ce3e31e6c4c.jpg";
import lviv from "./../../icons/catalog/lviv.jpg";
import odessa from "./../../icons/catalog/odessa_1.jpg";

const data = [
    
    {
        placePhoto: kyiv,
        name: 'Kyiv',
        time: 'night',
        priceInUAH: 2000,
        height: 3000,
    },
    {
        placePhoto: karpaty,
        name: 'Karpaty',
        time: 'afternoon',
        priceInUAH: 2500,
        height: 4000,
    },
    {
        placePhoto: lviv,
        name: 'Lviv',
        time: 'afternoon',
        priceInUAH: 2000,
        height: 2000,
    },
    {
        placePhoto: odessa,
        name: 'Odessa',
        time: 'night',
        priceInUAH: 3000,
        height: 3600,
    },
];

const Planes = () => {
    const [checkFiltr, setCheckFilter] = useState(false);
    return(
        <CatalogOuter>
            <Forms>
                <FilterForm>
                    <FormHead>
                        <h3>Sort by: </h3>
                        <Input type="checkbox" id="check" onChange={() => setCheckFilter(!checkFiltr)}></Input>
                        <label for="check">
                            
                        </label>
                    </FormHead>
                   
                    <NewFunctions check={checkFiltr}>
                    { checkFiltr&&
                    <InputFilterForms> 
                        <h4>Price: </h4> 
                        <ByPrice>
                            <MinPrice type="text" placeholder="min price"/> <br/>
                            <MaxPrice type="text" placeholder="max price"/> <br/>
                        </ByPrice>   
                        <h4>Hight of shafl: </h4>
                        <ByHight>
                            <MinHight type="text" placeholder="min hight"/> <br/>
                            <MaxHight type="text" placeholder="max hight"/> <br/>
                        </ByHight> 
                        <ApplyBtn type="submit">Apply</ApplyBtn>
                    </InputFilterForms>
                    }
                    </NewFunctions>
                    
                </FilterForm>
                <SearchForm>
                    <InputSearch type="text" placeholder="Search by ..."/> <br/>
                    <SearchBtn type="submit"></SearchBtn>
                </SearchForm>
            </Forms>
            <Cards>
                {data.map(({placePhoto, name, time, priceInUAH, height }, idx) => (
                    <PlanesCardItem
                        placePhoto={placePhoto}
                        name={name}
                        time={time}
                        priceInUAH={priceInUAH}
                        height={height}
                        id={idx}
                    />
                ))}
            </Cards>
        </CatalogOuter>
    );
};

export default Planes;