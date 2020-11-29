import React from 'react';
import { StyledFooter, StyledLogoName, StyledNetwoks, NetworkLogo, StyledRights } from './Footer.styled';
import {ReactComponent as LogoName } from "./../../icons/planes_logo2.svg";
import {ReactComponent as Rights } from "./../../icons/rights.svg";
import insta from "./../../icons/insta.png"
import facebook from "./../../icons/facebook.png"
import pinterest from "./../../icons/pinterest.png"


const Footer = () => { 
    return(
        <StyledFooter>
            <StyledLogoName>
                <LogoName />
            </StyledLogoName>
            <StyledNetwoks>
                <a href="https://www.instagram.com/"> <NetworkLogo src={insta} /> </a>
                <a href="https://www.pinterest.com/"> <NetworkLogo src={pinterest} /> </a>
                <a href="https://www.facebook.com/"> <NetworkLogo src={facebook} /> </a>
            </StyledNetwoks>
            <StyledRights>
                <Rights/>
            </StyledRights>
        </StyledFooter>
        );
};

export default Footer;