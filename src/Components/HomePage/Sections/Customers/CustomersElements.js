import styled from 'styled-components'


export const MainWrapper = styled.div`
width:100%;
padding-bottom:50px;
height:auto;
margin-top: 50px;
margin-bottom: 50px;
display:flex;
flex-wrap:block;



@media only screen and (max-width: 1170px) {
    flex-direction: column;
    align-items:center
    width:100vw;

    justify-content: center;
    

}

`
export const MainInfo = styled.div`

max-width:1000px;
height:800px;
margin:auto;
display:Flex;
flex-direction:column;
z-indez:1;
position:absolute;
align-items: center;
justify-content: center;
background-image: url("assets/arrow_circular.svg");
background-repeat: no-repeat;
background-size:100%;
background-position: center;


@media only screen and (max-width: 1170px) {
    height:auto;
    flex-direction: column;
    align-items:center;
    position:relative;
    width:auto;
    margin:10px;

}

`
export const ElementsContainer = styled.div`
max-width:1000px;
padding-bottom:50px;
height:auto;
margin:auto;
display:Flex;
flex-wrap:wrap;


@media only screen and (max-width: 1170px) {
    max-width:auto;
    flex-wrap:no-wrap;
    align-items:center;
    background-image: none;
    margin:0px;
    
}

`

export const CardContainer = styled.div`
width:500px;
min-width:430px;
max-width:500px;

height:auto;
margin-top:50px;
background-size: contain;

align-items: center;
justify-content: center;

@media only screen and (max-width: 1170px) {
    width:auto;
    margin:auto;
 
}
@media only screen and (max-width: 870px) {
    min-width:370px;
    margin-top:10px;
    max-width:370px;

    
}

`
//----------------

export const Card1 = styled.div`
transition: all 0.5s ease-in-out;
width: 250px;
height: 80px;

background:#FFFFFF;
border-style: solid;
border-width: #FFFFFFF;
border-radius:8px;
border-color: #FFFFFF;
margin:10px;
position:relative;
top:20px;
left:180px;
align-items: center;
justify-content: left;
display:flex;
padding:0px;
flex-wrap:wrap;
overflow:hidden;

&: hover {
    transition: all 0.5s ease-in-out;
    width:400px;
    height:300px;
    justify-content: center;
    padding:20px;
    }

@media only screen and (max-width: 1170px) {
    width: auto;
    margin:10px;
    position:relative;
    top:0%;
    left:0%;
}
@media only screen and (max-width: 870px) {
    margin-top:10px;
    position:relative;
    width:300px;
    height: 80px;
    left:0%;
    margin:auto;
    

    &: hover {
        transition: all 0.5s ease-in-out;
        width:300px;
        height:300px;
        justify-content: center;
        padding:20px;
        
        }

    
}
`
export const Card2 = styled.div`
margin:10px
padding:10px;
width: 250px;
height: 80px;
position:relative;
top:100px;
left: 230px;
background:#FFFFFF;
border-style: solid;
border-width: #FFFFFFF;
border-radius:8px;
border-color: #FFFFFF;

align-items: center;
justify-content: left;
display:flex;
padding:0px;
flex-wrap:wrap;
overflow:hidden;

&: hover {
    transition: all 0.5s ease-in-out;
    width:400px;
    height:300px;
    justify-content: center;
    padding:20px;
    }

    @media only screen and (max-width: 1170px) {
        width: auto;
        margin:10px;
        position:relative;
        top:0%;
        left:0%;
    }

    @media only screen and (max-width: 870px) {
        margin-top:10px;
        margin:10px;
        position:relative;
        
        width:300px;
        height: 80px;
        left:0%;
        margin:auto;
    
    
        &: hover {
            transition: all 0.5s ease-in-out;
            width:300px;
            height:300px;
            justify-content: center;
            padding:20px;
            
            }
    
`
export const Card3 = styled.div`
margin:10px;
margin-top: 100px;
padding:10px;
width: 300px;
height: 80px;
background:#FFFFFF;
position:relative;
top:120px;
left:-80px;
border-style: solid;
border-width: #FFFFFFF;
border-radius:8px;
border-color: #FFFFFF;

align-items: center;
justify-content: left;
display:flex;

padding:0px;
flex-wrap:wrap;
overflow:hidden;

&: hover {
    transition: all 0.5s ease-in-out;
    width:400px;
    height:300px;
    justify-content: center;
    padding:20px;
    }

    @media only screen and (max-width: 1170px) {
        width: auto;
        margin:10px;
        position:relative;
        top:0%;
        left:0%;
    }
    @media only screen and (max-width: 870px) {
        margin-top:10px;
        margin:10px;
        position:relative;
        width: 300px;
        height: 80px;
        left:3%;
        left:0%;
        margin:auto;
    
    
        &: hover {
            transition: all 0.5s ease-in-out;
            width:300px;
            height:300px;
            justify-content: center;
            padding:20px;
            }
    
`
export const Card4 = styled.div`
margin:60px;
margin-top: 300px;
padding:10px;
width: 250px;
height:80px;
position:relative;
top:0px;
left:180px;
background:#FFFFFF;
border-style: solid;
border-width: #FFFFFFF;
border-radius:8px;
border-color: #FFFFFF;

align-items: center;
justify-content: left;
display:flex;

padding:0px;
flex-wrap:wrap;
overflow:hidden;

&: hover {
    transition: all 0.5s ease-in-out;
    width:300px;
    height:380px;
    justify-content: center;
    padding:20px;
    }

    @media only screen and (max-width: 1170px) {
        width: auto;
        margin:10px;
        position:relative;
        top:0%;
        left:0%;
    }

    @media only screen and (max-width: 870px) {
        margin-top:10px;
        margin:10px;
        position:relative;
        width:300px;
        height: 80px;
        left:0%;
        margin:auto;
    
    
        &: hover {
            transition: all 0.5s ease-in-out;
            width:300px;
            height:300px;
            justify-content: center;
            padding:20px;
            left:0;
            }
    
`

//---------------------

export const Button = styled.button`
margin:5px;
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

@media only screen and (max-width: 1170px) {
    margin-bottom:30px;
 `

 //----------------------------

 export const ButtonImg = styled.img`
margin:10px;
width:auto;
height:auto;
padding:5px;
object-fit: contain;
background-color: #bfede6;
border-style: solid;
border-width:0px;
border-radius:30px;



`

export const Img = styled.img`
margin:0px;
width:300px;
height:auto;
object-fit: contain;



`

//-----------------

export const H1 = styled.h1`
color: #064149; 
font-size: 2.2rem;
font-family: "DM Sans",sans-serif;
font-weight: 700;
line-height:60px;
text-align: center;
`
export const H2 = styled.h1`
color: #064149; 
font-size: 1.4rem;
font-family: "DM Sans",sans-serif;
font-weight: 700;
text-align: center;
`

export const P = styled.p`

font-family: 'DM Sans';
font-weight: 300;
margin-left: 5px;
font-size: 0.8rem;
line-height: 30px;
text-align: left;
color:#064149;
display:block;
margin-block-start: 1em;
`