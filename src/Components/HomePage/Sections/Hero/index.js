
import { H1,H2, Column, MainWrapper, Button, HeroImage, TittleWrapper } from "./HeroElements";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Hero = () => {

     // images source
     const imageOne = 'assets/tablet_photo.png'
     const imageTwo = 'assets/church_coloured2.png'
     const imageThree = 'assets/school_coloured2b.png'
     

    return (
        <>
       <AnimationOnScroll animateIn="animate__fadeIn" >
        <TittleWrapper>
                <H1>
                    Growing our relationship with God
                </H1>
            </TittleWrapper>
        <MainWrapper>
            <Column variation='true'>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig" >
                    <HeroImage variation = 'true'  src = {imageTwo}/>
                </AnimationOnScroll >
            </Column>
            <Column>
                <H2>
                    A simple and personalized solution for religious 
                </H2>
                <H2>
                    education and faith formation.
                </H2>
                <Button>
                    Speak with us
                </Button>
                <HeroImage src = {imageOne}/>
            </Column>
            <Column variation='true'>
                <AnimationOnScroll animateIn="animate__fadeInRightBig" >
                    <HeroImage variation = 'true' src = {imageThree}/>
                </AnimationOnScroll>
            </Column>
        </MainWrapper>
        </AnimationOnScroll>
        </>
    )
}

export default Hero;