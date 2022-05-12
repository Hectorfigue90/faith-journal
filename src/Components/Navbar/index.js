import React  from "react";
import {Menu} from '@styled-icons/material-rounded/Menu'

import {
    NavBarWrapper, Logo, NavBarMain, NavButton, LoginButton, NavBarExtra, LogoContainer, MenuButton
}from './NavBarElelements'
import { ReactComponent as Icon } from '../../assets/faith_logo.svg'

const NavBar = () => {

    return(
        <>
            <NavBarWrapper>
                <LogoContainer>
                    <Logo><Icon/></Logo>
                </LogoContainer>
                <NavBarMain>
                    <NavButton>
                        About us 
                    </NavButton>
                    <NavButton>
                        Schools
                    </NavButton>
                    <NavButton>
                        Parishes/Intitutions
                    </NavButton>
                    <NavButton>
                        Bookstore
                    </NavButton>
                </NavBarMain>
                <NavBarExtra>
                    <LoginButton >
                        Login
                    </LoginButton>
                    <LoginButton variation = 'true'>
                        Get Started
                    </LoginButton>
                </NavBarExtra>
                <MenuButton><Menu weight="400"/></MenuButton>
            </NavBarWrapper>
        </>
    )
}

export default NavBar;