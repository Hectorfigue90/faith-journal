import styled from 'styled-components'


export const MainWrapper = styled.div`
Background: #FFFFFF;
width: 100%;
padding-bottom:100px;
height:auto;
margin-top: 50px;
margin-bottom: 50px;
display:flex;
flex-direction: column;

`

export const TittleWrapper = styled.div`
margin:auto;
width: auto; 
padding:50px;
`
export const ArticleWrappers = styled.div`
widht:auto;
margin: auto;
align-items:center;
display:flex;
flex-wrap:wrap;


`
export const ArticleContainer = styled.div`
max-width:  266px;
margin:30px;


`

export const ArticleDetails = styled.div`
width: 250px;
margin: 0px 8px ;
display:  flex;
flex-direction: row;
display: flex;
align-items: center;
justify-content: space-between;

`

//-----------------------------------

export const H1 = styled.h1`
color: #064149; 
font-size: 2.4rem;
font-family: "DM Sans",sans-serif;
font-weight: 700;
line-height:60px;
text-align: left;
`


export const H2 = styled.h2`
color: #064149; 
font-size:1rem;
font-family: "DM Sans",sans-serif;
font-weight: 700;
line-height20px;
text-align: left;
`

export const H3 = styled.h3`
color:${props => props.variation ? '#fd7d73' : '#7eb7ae' }; 

font-size: 0.6rem;
font-family: "DM Sans",sans-serif;
font-weight: 600;
text-align: ${props => props.variation ? 'right' : 'left'};

`
export const P = styled.p`
color: #064149; 
font-size:0.85rem;
font-family: "DM Sans",sans-serif;
font-weight: 300;
line-height20px;
text-align: left;
`
//----------------------------------

export const Button = styled.button`
width:auto;
height:auto;

background:#FFFFFF;
border-style: solid;

border-radius:8px;
border-color: #FFFFFF;
`

export const ButtonImg = styled.img`
background:#FFFFFF;
border-style: solid;
border-width:0px;
border-radius:8px;
margin:auto;
width:250px;
height:auto;
object-fit: contain;



`