import React from 'react';
import { NavList, NavUl, Navigat } from './Navigation.styled';
import {Switch, BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Home from "../Home/Home";
import Planes from '../Planes/Planes';

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
                    <NavLink exact to="/sales" activeClassName="selected" >SALES</NavLink>
                </NavList>
            </NavUl>       
            <Switch>
                <Route path="/planes">
                    <Planes/>
                </Route>
                <Route path="/sales">
                    <div>Hello it is sales</div>
                </Route>
                <Route path="/">
                    <Home/>                
                </Route>
            </Switch>
        </Navigat>
    </Router>);
};

export default Navigation;