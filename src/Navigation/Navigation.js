import React from 'react';
import { NavList, NavUl, Navigat } from './Navigation.styled';
import {Switch, BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Home from "../Home/Home";

const Navigation = () => { 
    return(
    <Router>
        <Navigat>
            <NavUl>
                <NavList>
                    <NavLink exact to="/" activeClassName="selected">HOME</NavLink>
                </NavList>
                <NavList>
                    <NavLink exact to="/planes" activeClassName="selected">PLANES</NavLink>
                </NavList>
                <NavList>
                    <NavLink exact to="/sale" activeClassName="selected" >SALES</NavLink>
                </NavList>
            </NavUl>       
            <Switch>
                <Route path="/planes">
                    <div> It is list of planes</div>
                </Route>
                <Route path="/sale">
                    <div> It is list of sales</div>
                </Route>
                <Route path="/">
                    <Home/>                
                </Route>
            </Switch>
        </Navigat>
    </Router>);
};

export default Navigation;