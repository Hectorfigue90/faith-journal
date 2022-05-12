import styled from "styled-components";

//--------------
export const MainWrapper = styled.div`
margin-bottom:60px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

`
export const TittleWrapper = styled.div`
margin:auto;
width: 100vw;
margin-top:100px;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 850px) {
  margin-top:30px;
  max-width: 600px;
  width: auto;
}
`

export const Column = styled.div`
min-width:  ${props => props.variation ? '21vw' : '48vw'};
display: flex;
align-items: center;
justify-content: ${props => props.variation ? 'flex-start' : 'center'};
flex-direction: column;
overflow: hidden;


@media only screen and (max-width: 850px) {
  min-width:  ${props => props.variation ? '350px' : '350px'};
}



`

//-------------
export const H1 = styled.h1`
color: #064149;
font-size: 2.7rem;
font-family: "DM Sans",sans-serif;
font-weight: 700;
text-align: center;
line-height: 55px;
`

export const H2 = styled.h2`
color: #064149;
font-size: 1.75rem;
font-family: "DM Sans",sans-serif;
font-weight: 300;
text-align: center;
margin: 0px;
line-height: 45px;

@media only screen and (max-width: 850px) {
    font-size: 1.5rem;
  }

}`

//------
export const Button = styled.button`
margin:40px;
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
}
 
  

`
//-----
export const HeroImage = styled.img`
margin:0px;
width:auto;
max-width: ${props => props.variation ? '330px' : '48vw'};
display: flex;







@media only screen and (max-width: 850px) {
    display:${props => props.variation ? 'none' : 'flex'};
    max-width: ${props => props.variation ? '330px' : '48vw'};

  }

`