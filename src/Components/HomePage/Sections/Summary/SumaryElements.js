import styled from 'styled-components'

export const MainWrapper = styled.div`
background: #FFFFFF;
height:auto;


`
export const ButtonWrapper = styled.div`
height: auto;
padding:20px;
margin:20px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

@media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`
export const VerticalLayout = styled.div`
display:flex;
flex-direction: column;
height: 100px;
align-items: left;
justify-content: center;

`
export const TabWrapper = styled.div`
display:flex;
flex-direction: column;
max-width: 900px;
margin:auto;

align-items: center;
justify-content: center;

@media only screen and (max-width: 650px) {
    flex-direction: column;
    min-height:1000px;
    margin:auto;
  }

`
export const Slides = styled.div`
animation: fadeIn linear 1s;
display:flex;
flex-direction:row;
max-width:800px;
max-height:500px;
padding:5px;
margin:20px;
align-items: center;
justify-content: flex-start;

@media only screen and (max-width: 750px) {
    flex-direction: column;
    width:100%;
    
  }



`
export const SlidesColumns = styled.div`
display:flex;
padding:50px;
flex-direction: column;
max-width: 550px;
margin:auto;
align-items: left;
justify-content:flex-start;


@media only screen and (max-width: 750px) {
    align-items: center;  
    max-width: 300px;
}
`
//-------------------------------

export const Button = styled.button`
width:${props => props.variation ? '260px' : '300px'};
height:90px;
padding:0 20px;
background: #FFFFFF;
margin:5px;

border-style: solid;
border-width:${props => props.selected ? '2px' : '1px'};
border-radius:8px;
border-color: ${props => props.selected ? '#064149' : '#d2d2d2'};
cursor: pointer;

overflow:hidden;
align-items: center;
justify-content: center;
display:flex;

font-family: 'DM Sans';
font-weight: 600;
font-size: 0.9rem;
color: #064149;

&: hover {
    transition: all 0.3s ease-in-out;
    border-color: #064149;
    }
`

export const ButtonCarousel = styled.button`
width:${props => props.variation ? '260px' : '150px'};
height:90px;
padding:0 20px;
background: #FFFFFF;
margin:5px;

border-style: solid;
border-width:${props => props.selected ? '2px' : '0px'};
border-radius:8px;
border-color: ${props => props.selected ? '#064149' : '#d2d2d2'};
cursor: pointer;

overflow:hidden;
align-items: center;
justify-content: center;
display:flex;

font-family: 'DM Sans';
font-weight: 600;
font-size: 0.9rem;
color: #064149;

&: hover {
    transition: all 0.1s ease-in-out;
    border-color: #064149;
    border-width:${props => props.selected ? '2px' : '1px'};

&:active{
    border-color: #064149;
    border-width:5px;
    }

`
//-------------



export const H1 = styled.h1`
color: #064149;
margin:30px;
margin-bottom:0px;
font-size: 2.7rem;
font-family: "DM Sans",sans-serif;
font-weight: 700;
line-height:45px;
text-align: left;
`

export const H3 = styled.h3`
font-family: 'DM Sans';
font-weight: 600;
font-size: 1.2rem;
text-align: left;
color: #064149;
white-space:nowrap;
margin:0px;


`

export const H4 = styled.h4`
font-family: 'DM Sans';
font-weight: 600;
font-size: 0.9rem;
text-align: left;
color: #82a0a4;
white-space:nowrap;
margin:0px;


`
export const P = styled.p`

font-family: 'DM Sans';
font-weight: 300;
font-size: 0.8rem;
line-height: 30px;
text-align: ${props => props.variation ? 'left' : 'center'};
color: #064149;
margin:30px;


`
//-------------

export const ButtonImg = styled.img`
height:95px;
width:105px;
transform: rotate(-10deg);
margin-left: ${props => props.variation ? '-15px' : '20px'};
margin-top:33px;
position: relative;
right: 0px;
`

export const ButtonImg2 = styled.img`
height:auto;
width:47px;
margin-right:10px;
position: relative;

`

export const CarouselImages = styled.img`
animation: fadeIn linear 1s;
height:auto;
min-width:200px;
max-width:400px;
margin:auto;
position: relative;

@media only screen and (max-width: 750px) {
    align-items: center;  
    max-width:250px;
}

`
