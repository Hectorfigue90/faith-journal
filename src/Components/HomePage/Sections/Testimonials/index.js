import React from 'react'
import { BottomContainer, H1, Img1,Img2, Img3, MainWrapper, P, TestimonialQuote, TestimonialWrapper , TopContainer} from './TestimonialsElements'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Testimonials = () => {

    return(
        <MainWrapper>
             <AnimationOnScroll animateIn="animate__fadeIn" >   
            <TopContainer>
                <TestimonialWrapper>
                        <P>“This is quite the most rewarding and powerful tool I have used ... The conversations we are having about God and his Word have been incredible”</P>
                    <TestimonialQuote>
                        <H1>Ms Walker</H1>
                    </TestimonialQuote>
                   
                </TestimonialWrapper>

                <Img1 src = 'assets/Testimonials/carousel4.png'> 
                </Img1>
            </TopContainer>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInUp" >
                <BottomContainer>
            
                    <Img2 src = 'assets/Testimonials/bibble_journal.png'>
                        
                    </Img2>

                    <Img3 src = 'assets/Testimonials/static_sheets..png'>
                        
                        </Img3>
            
                </BottomContainer>
            </AnimationOnScroll>
            
        </MainWrapper>
    )

}
export default Testimonials;