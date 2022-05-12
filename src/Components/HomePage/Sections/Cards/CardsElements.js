import styled from 'styled-components'

export const MainWrapper = styled.div` 
height:auto;
width:100vw;

background: #fcf2ea;
align-items: center;
justify-content: center;
`
export const TittleWrapper = styled.div`
margin:auto;
width: auto; 
padding:50px;
display:flex;
align-items: center;
justify-content: center;
`

export const CardsContaine = styled.div`
min-width: auto;
height: auto;
margin:auto;
align-items:center;
display: flex;
justify-content:center;
flex-direction: row;

@media only screen and (max-width: 1100px) {
    flex-direction: column;
}
`

export const BlankCards = styled.div`
height: 350px;
max-width: 300px;
margin:10px;
padding:40px;
width: auto;
background:#FFFFFF;
border-style: solid;
border-width: #FFFFFFF;
border-radius:8px;
border-color: #FFFFFF;


`


//—————————

export const H1 = styled.h1`
color: #064149; 
margin-bottom:0px;
font-size: 2.4rem;
font-family: "DM Sans",sans-serif;
font-weight: 700;
line-height:60px;
text-align: center;
`
export const H2 = styled.h1`
color: #064149; 
margin-bottom:0px;
font-size: 1.6rem;
font-family: "DM Sans",sans-serif;
font-weight: 700;
line-height:60px;
text-align: left;
`

export const P = styled.p`

font-family: 'DM Sans';
font-weight: 300;
font-size: 0.8rem;
line-height: 30px;
text-align: left;
color:#064149;
`

//———————————————

export const CardImg = styled.img`
width: auto;
height: auto;

`

//——————————————-
export const Button = styled.button`
margin:auto;
margin-top:40px;
width: 160px;
height: 48px;
background-color: #fd7d73;
font-family: "DM Sans",sans-serif;
font-weight: 400;
text-align: center;



border-style: solid;
border-width:1px;
border-radius:25px;
border-color: #fd7d73;
cursor: pointer;

font-family: 'DM Sans';
font-weight: 500;
font-size: 0.8rem;
color: #FFFFFF;

&: hover {
transition: all 0.3s ease-in-out;
background-color: #E15242;
`