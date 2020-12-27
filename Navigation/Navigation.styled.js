
import styled from 'styled-components'

export const NavList = styled.li`
    .selected{
        text-decoration: underline;
        text-decoration-color: #FFFFFF;
    };
    list-style: none;
    cursor: pointer;
    font-size: 24px;
    padding-bottom: 8px;
    a{
         text-decoration: none; color: #FFFFFF;
    }
`;

export const NavUl = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 600px;
    padding-top: 5px;
    margin: 0 auto;
`;

export const Navigat = styled.div`
    display:block;
    margin:0px;
`;
