import styled from 'styled-components'

export const MainWrapper = styled.div`
Background: #fd7d73;
width:100%;
padding-bottom:100px;
height:auto;
margin-top: 50px;
margin-bottom: 50px;

`
export const TittleWrapper = styled.div`
margin:auto;
width: 70vw; 
padding:50px;
`

export const CardsContaine = styled.div`
width: auto; 
height: auto;
margin:auto;
align-items:center;
display: flex;
flex-wrap: wrap;
justify-content:center;
`

//——————————————————————-

export const H1 = styled.h1`
color: #FFFFFF; 
font-size: 1.8rem;
font-family: "DM Sans",sans-serif;
font-weight: 700;
line-height:60px;
text-align: left;
`




//——————————————————

export const Button= styled.button`

margin:6px;
min-width:200px;
max-width:200px;
min-height:200px;
max-height:200px;
padding:15px;
display:flex;
flex-direction:column;

background:#FFFFFF;
border-style: solid;
border-width: #FFFFFFF;
border-radius:8px;
border-color: #FFFFFF;

color: #064149; 

justify-content:center;
align-items:center;

font-size: 0.7rem;
font-family: "DM Sans",sans-serif;
font-weight: 700;
line-height:60px;
text-align: center;


&: hover {
    transition: all 0.3s ease-in-out;
    background-color: #064149;
    color: #FFFFFF; 
 
&: focus {
      background-color: #064149;
    color: #FFFFFF; 
}
`

export const ButtonImg = styled.img`
margin:auto;
width:85px;
height:85px;
object-fit: contain;



`

