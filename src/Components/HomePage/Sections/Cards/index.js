import React from "react";
import { MainWrapper, TittleWrapper,H1, CardsContaine, P, BlankCards, CardImg, H2, Button } from "./CardsElements";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Cards = () =>{


    return(
        <>
        <MainWrapper>
            <TittleWrapper>
                <H1>Endless possibilities for a lifelong learning journey.</H1>
            </TittleWrapper>
                <CardsContaine>
                <AnimationOnScroll animateIn="animate__fadeIn" >
                    <BlankCards>
                        <CardImg src= "assets/data_flexible.png"/>
                        <H2>
                            Flexible
                        </H2>
                        <P>
                        Faith Journals can be integrated with any content material and is 
                        being used by all ages from 4th grade to high school and adult faith formation. 
                        It can be used online, in person, or in a hybrid format.
                        </P>    
                    </BlankCards>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn"  delay={200}>
                    <BlankCards>
                        <CardImg src= "assets/data_engaging.png"/>
                        <H2>
                            Interactive
                        </H2>
                        <P>
                        Teachers can discuss with the student in real time, they can provide comments to 
                        each student's reflection, and students can also write synchronously in pairs.
                        </P>    
                    </BlankCards>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn" delay={400} >
                    <BlankCards>
                        <CardImg src= "assets/data_interactive.png"/>
                        <H2>
                            Engaging
                        </H2>
                        <P>
                        Faith Journals makes technology not a distraction but a meaningful 
                        means to develop a habit of reflection and prayer.
                        </P>    
                    </BlankCards>
                    </AnimationOnScroll>
                </CardsContaine>
                <TittleWrapper>
                        <Button>Speak with us</Button>
                </TittleWrapper>
        </MainWrapper>

        </>
    )
}

export default Cards;

