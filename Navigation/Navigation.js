
import React from 'react';
import { NavList, NavUl, Navigat } from './Navigation.styled';
import {Switch, BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Home from "../Home/Home";
import Catalog from '../Catalog/Catalog';
import ItemPage from '../ItemPage/ItemPage';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import Success from '../Success/Success';
const Navigation = () => { 
    return(
    <Router>
        <Navigat>
            <NavUl>
                <NavList>
                    <NavLink exact to="/" activeClassName="selected">HOME</NavLink>
                </NavList>
                <NavList>
                    <NavLink exect to="/catalog" activeClassName="selected">CATALOG</NavLink>
                </NavList>
                <NavList>
                    <NavLink exact to="/cart" activeClassName="selected" >CART</NavLink>
                </NavList>
            </NavUl>       
            <Switch>
                <Route path="/catalog">
                    <Catalog/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
                <Route path="/checkout">
                    <Checkout/>
                </Route>
                <Route path="/success">
                    <Success/>
                </Route>
                <Route path="/item">
                    <ItemPage/>
                </Route>
                <Route path="/">
                    <Home/>                
                </Route>
            </Switch>
        </Navigat>
    </Router>);
};

export default Navigation;