
import React from 'react';
import { HeaderOuter, Head, StyledLogo } from './Header.styled';
import {ReactComponent as LogoMy } from "./../../icons/planes_logo.svg"
import Navigation from '../Navigation/Navigation';

const Header = () => { 
    return(
        <HeaderOuter>
            <Head>
                <StyledLogo>
                    <LogoMy />
                </StyledLogo>
                <Navigation />
            </Head>
        </HeaderOuter>);
};

export default Header;

