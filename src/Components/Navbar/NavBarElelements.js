import styled from "styled-components";

export const Logo = styled.svg`
height:35px;
width: auto;
max-width:175px;
`

///-----------------------
export const NavBarWrapper = styled.div`
width: 100vw;
height: 80px;
background: #fcf2ea;
margin:auto;
display:flex;
flex-direction:row;
justify-content: center;
align-items: center;
position: fixed;
z-index:1;

`
export const NavBarMain = styled.div`
margin: auto;
min-width: 450px;
height:50px;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 850px) {
    display: none;
  }

`

export const LogoContainer = styled.div`
margin: 20px;
width:auto;
height:50px;
display: flex;
align-items: center;
justify-content: flex-start;

@media only screen and (max-width: 850px) {
    position: absolute;
    left:0px;
  }


`
export const NavBarExtra = styled.div`
margin: 10px;
min-width:180px;
height:50px;
display: flex;
align-items: center;
justify-content: flex-end;

@media only screen and (max-width: 850px) {
    display: none;
  }

`

///-----------------------
export const NavButton = styled.button`
background: #FBF2EB;
min-width: 60px;
width: auto;
max-height:48px;
margin:0 10px;

border-style: solid;
border-width: 0 0 0px;
cursor: pointer;
white-space:nowrap;
font-family: 'DM Sans';
font-weight: 500;
font-size: 0.8rem;
color: #064149;

&: hover {
    transition: all 0.12s ease-in-out;
    border-width: 0 0 2px;
    border-color: #fd7d73;
    
}


`
export const LoginButton = styled.button`

background: #FBF2EB;
width: auto;
max-height:42px;
margin:5px;
padding:5px 10px;
position: flex-end;

border-style: solid;
border-width:${props => props.variation ? '1 0 0px' : '0 0 0px'};
border-radius: ${props => props.variation ? '25px' : '0px'};
border-color: #064149;
cursor: pointer;

font-family: 'DM Sans';
font-weight: 500;
font-size: 0.7rem;
color: #064149;

&: hover {
    transition: all 0.1s ease-in-out;
    background: ${props => props.variation ? '#064149' : '#FBF2EB'};
    color: ${props => props.variation ? '#FBF2EB' : '#064149'};
    border-radius:  ${props => props.variation ? '25' : '0'};
    border-color: ${props => props.variation ? '#064149' : '#fd7d73'};
    border-width:${props => props.variation ? '1 0 0px' : '0 0 2px'};
    cursor: pointer;
    
}

`
export const MenuButton = styled.button`

background: #FBF2EB;
width: 45px;
height: 45px;
margin:5px;
padding:10px 10px;
position: absolute;
right: 20px;
display:none;

border-style: solid;
border-width:1 0 0px;
border-radius:50px;
border-color: #064149;
cursor: pointer;
color: #064149;



@media only screen and (max-width: 850px) {
    display: flex;
  }

`
///-----------------------
export const H1 = styled.h1 `
font-family: 'DM-Sans';
font-weight: 700;
font-size: 1.rem;
`
