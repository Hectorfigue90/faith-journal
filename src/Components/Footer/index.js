import React from 'react'

import { FooterWrapper, SocialsContainer, Logo, FooterFragment, SocialBuutton, ButtonImg, Links, Img } from './FooterElements'

const Footer = () => {

    return (
     <FooterWrapper>
        <FooterFragment variation = 'true'>
            <Logo src = "assets/faith_logo_text_white.svg"></Logo>
            <SocialsContainer>
                <SocialBuutton>
                    <ButtonImg src = "assets/ig.svg"></ButtonImg>
                </SocialBuutton>
                <SocialBuutton>
                <ButtonImg src = "assets/linkedin.svg"></ButtonImg>
                </SocialBuutton>
            </SocialsContainer>
        </FooterFragment>
        <FooterFragment >
            <Links>Home</Links> <Links>About Us</Links> <Links>Schools</Links> <Links>Parishes/Institutions</Links> <Links>Bookstore</Links><Links>Privacy Policy</Links><Links>terms</Links><Links>Cookie Policy</Links>
        </FooterFragment>
        <FooterFragment></FooterFragment>
        <FooterFragment >
            <Links>All rights reserved © 2021 A company of</Links> <Logo src= 'assets/whiteLogoEscribli.svg'></Logo> <Img src= 'assets/cross.svg'></Img>
        </FooterFragment>
     </FooterWrapper>
    )
}
export default Footer;