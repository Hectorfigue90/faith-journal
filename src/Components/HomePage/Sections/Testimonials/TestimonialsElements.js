import styled from 'styled-components'

export const MainWrapper = styled.div`
Background: #fd7d73;
width: 100vw;
padding-bottom:100px;
height:auto;
margin-top: 50px;
margin-bottom: 50px;
display:flex;
flex-direction: column;

@media only screen and (max-width: 1300px) {
   display:none;
}

`
export const TestimonialWrapper = styled.div`
width: 48vw; 
padding:50px;
justify-content:left;
align-items:left;
`
export const TestimonialQuote= styled.div`
width: 48vw; 
justify-content:left;
align-items:right;
`


export const TopContainer = styled.div`
margin:auto;
width: auto; 
justify-content:left;
display:flex;
align-items:left;
`

export const BottomContainer = styled.div`
margin-left:150px;
width: auto; 
justify-content:left;
display:flex;
align-items:left;
`
//——————————————————————-

export const P = styled.h1`
color: #FFFFFF; 
margin:15px;
font-size: 1.2rem;
font-family: "DM Sans",sans-serif;
font-weight: 300;
line-height:30px;
text-align: left;
`
export const H1 = styled.h1`
color: #FFFFFF; 
margin-right:60px;
font-size: 1.2rem;
opacity:.6;
font-family: "DM Sans",sans-serif;
font-weight: 700;
line-height:30px;
text-align: right;
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

`

export const Img1 = styled.img`
margin-top:-100px;
width:auto;
height:auto;
object-fit: contain;
`
export const Img2 = styled.img`
width:auto;
height:auto;
object-fit: contain;
margin-left:0px;

`
export const Img3 = styled.img`
width:970px;
height:358px;
object-fit: contain;
position:absolute;
right:80px;
margin-top:140px;
object-fit: cover;
object-position:60% 0%;



`