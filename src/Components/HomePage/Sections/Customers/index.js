
import React from 'react';
import { CardContainer, ElementsContainer, MainWrapper,H1, H2, P,Card1, Card2, Card3, Card4, ButtonImg, MainInfo, Img, Button } from './CustomersElements';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Customers = () => {

return(
    <MainWrapper>
        
        <ElementsContainer>
            <MainInfo>
                <Img src="assets/customers/hands.svg"></Img>
                <P>"For the kingdom of heaven belongs to such as these"Mathew 19:14</P>
                <H1>A community effort to strengthen our relationship with God</H1>
                <Button>Speak with us</Button>
            </MainInfo>
            
            <CardContainer>
            <AnimationOnScroll initiallyVisible={false} animateIn="animate__zoomIn">
                <Card1>
                <ButtonImg src = "assets/customers/school.svg"></ButtonImg>
                    <H2>
                        Parishes
                    </H2>
                    <P>
                        flourish as their communities grow in faith, knowledge of God, and wisdom. Faith Journals can be a means to teach parish families, even in the most challenging of times. 
                    </P>
                </Card1>
                </AnimationOnScroll>
            </CardContainer>
            <CardContainer>
            <AnimationOnScroll initiallyVisible={false} animateIn="animate__zoomIn">
                <Card2>
                <ButtonImg src = "assets/customers/school.svg"></ButtonImg>
                    <H2>
                        Families
                    </H2>
                    <P>
                         see their children immersed in the sacred Word and learning to apply it to daily life. Faith Journals 
                         offers a segue into home-based discussions of matters of faith and practice. 
                    </P>
                </Card2>
                </AnimationOnScroll>
            </CardContainer>
            <CardContainer>
            <AnimationOnScroll initiallyVisible={false} animateIn="animate__zoomIn">
                <Card3>
                <ButtonImg src = "assets/customers/school.svg"></ButtonImg>
                    <H2>
                        Administrators
                    </H2>
                    <P>
                        By providing their schools with an easy-to-use, effective writing platform focused on faith, administrators gain the 
                        satisfaction of promoting quality student learning. They also increase the visibility and role of Scripture throughout the school community, deepening its spiritual identity.
                    </P>
                </Card3>
                </AnimationOnScroll>
            </CardContainer>
            <CardContainer>
            <AnimationOnScroll initiallyVisible={false} animateIn="animate__zoomIn">
                <Card4>
                <ButtonImg src = "assets/customers/school.svg"></ButtonImg>
                    <H2>
                        Educators
                    </H2>
                    <P>
                        Faith Journals’ flexibility allows educators to customize its use to the unique needs and specific interests of 
                        each student or class and integrate it with any curriculum. As a result, students experience a richer, more varied approach to religious education and personal faith.
                    </P>
                </Card4>
                </AnimationOnScroll>
            </CardContainer>
        </ElementsContainer>
    </MainWrapper>
)

}

export default Customers;