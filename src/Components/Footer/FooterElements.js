import styled from 'styled-components'

export const FooterWrapper = styled.div`
min-height:250px;
height:auto;
width:auto;
background:#064149;
padding: 10px 60px;
display:flex;
flex-direction:column;
align-items: left;
justify-items:leftt;

`
export const FooterFragment = styled.div`
height:auto;
min-height:60px;
width: 100%;
align-items:center;
justify-content:left;
display:flex;
padding:5px;
flex-direction:row;



border-style: solid;
border-width:0px 0px 1px 0px;
border-radius:0px;
border-color: ${props => props.variation ? '#fd7d73' : '#064149'};

@media only screen and (max-width: 940px) {
    flex-direction: column;
    align-items:left;
}


`
export const SocialsContainer = styled.div`
width: auto;
height: auto;
display:flex;
margin-right:0px;
margin-left:auto;

@media only screen and (max-width: 940px) {
    margin-right:auto;
    margin-left:0px
}
`
//--------------

export const Logo = styled.img`
widht:auto;
height:35px;
padding: 30px 0px;



`
export const ButtonImg = styled.img`
height:auto;
width:20px;
margin:auto;

opacity: .5;

&: hover {
    transition: all 0.3s ease-in-out;
    opacity: 1;
    

`
export const Img = styled.img`

height:auto;
width:150px;
margin-bottom:50px;
margin-right:0px;
margin-left:auto;

@media only screen and (max-width: 940px) {
    display:none;
}

`

//---------------

export const SocialBuutton = styled.button`
width:55px;
height:55px;
margin:5px;
background:#064149;
border-style: solid;
border-width:1px 1px 1px 1px;
border-radius:30px;
border-color: #fd7d73;
cursor: pointer;
display:flex;

&: hover {
    transition: all 0.3s ease-in-out;
    border-width:1.2px 1.2px 1.2px 1.2px;
    
`

export const Links = styled.button`
background:#064149;
width:auto;
font-weight: 300;
font-size: 14px;
margin:10px;
text-align: left;
font-family: "DM Sans",sans-serif;
color: #fcf2ea;
opacity: .6;


border-style: solid;
border-width: 0px;
border-radius:30px;
`