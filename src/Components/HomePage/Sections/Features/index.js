import React from 'react'
import { Button, ButtonImg, CardsContaine, H1, MainWrapper, TittleWrapper } from './FeaturesElements'
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Features = () => {

    return(
        <MainWrapper>
            <TittleWrapper>
                <H1>A glimpse into our future</H1>
            </TittleWrapper>
            <AnimationOnScroll initiallyVisible={false} animateIn="animate__zoomIn">
            <CardsContaine>
                <Button tabindex={0}>
                    <ButtonImg src = 'assets/featuresIcons/google_dark.svg'></ButtonImg>
                    Google integration
                </Button>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/2.svg'></ButtonImg>
                    In-app chat
                </Button>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/3.svg'></ButtonImg>
                    teacger Collaboration
                </Button>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/4.svg'></ButtonImg>
                    Breakout writting rooms
                </Button>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/5.svg'></ButtonImg>
                    image uploads
                </Button>
            </CardsContaine>
            </AnimationOnScroll>
            <AnimationOnScroll initiallyVisible={false} animateIn="animate__zoomIn">
            <CardsContaine>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/6.svg'></ButtonImg>
                    Duplicate activities
                </Button>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/7.svg'></ButtonImg>
                    Unlimited activities
                </Button>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/8.svg'></ButtonImg>
                    Vocabulary tools
                </Button>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/9.svg'></ButtonImg>
                    PDF creation
                </Button>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/10.svg'></ButtonImg>
                    Rubrics
                </Button>
            </CardsContaine>
            </AnimationOnScroll>
            <AnimationOnScroll initiallyVisible={false} animateIn="animate__zoomIn">
            <CardsContaine>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/11.svg'></ButtonImg>
                    Professional development
                </Button>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/12.svg'></ButtonImg>
                    Library resources
                </Button>
                <Button>
                    <ButtonImg src = 'assets/featuresIcons/13.svg'></ButtonImg>
                    Video uploads
                </Button>
            </CardsContaine>
            </AnimationOnScroll>
        </MainWrapper>
    )

}
export default Features;