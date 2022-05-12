import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGrow, setRead, setReflect, setCreate, setEngage, setMonitor, setPublish, setReview } from "../../../../redux/carouselActions";
import { AnimationOnScroll } from 'react-animation-on-scroll';
 
import {
    Button,
    ButtonImg,
    ButtonWrapper,
    MainWrapper,
    H1,
    H3,
    H4,
    VerticalLayout,
    P,
    TabWrapper,
    ButtonCarousel,
    ButtonImg2,
    Slides,
    CarouselImages,
    SlidesColumns,
} from './SumaryElements';


const Summary = () => {

    const position = useSelector((state) => state);
    const dispatch = useDispatch();

    const images = [
        "assets/read_write1.png",
        "assets/read_write2.png",
        "assets/read_write3.png",
        "assets/create.png",
        "assets/publish.png",
        "assets/monitor.png",
        "assets/review.png",
        "assets/engage.png"
      ];

      const tittles = [
        "Read",
        "Reflect & write",
        "Grow",
        "Create",
        "Publish and share",
        "Monitor participants",
        "Review participants' responses",
        "Engage in discussion"


      ];

      const text = [
        "Students read Scriptures passages, writings from the Saints, or spiritual exercises provided by the teacher or spiritual director.",
        "Students reflect and write on the material provided. Instructors can guide and respond to students’ work in real time.",
        "Bringing students closer to God and walking with them in their spiritual journey.",
        "Add lessons and chapters and the content for each, that can include images, videos or attachments. Lessons can be added at any time before or during the program.",
        "Each course/program has a unique link for participants to join. Participants will be able to see the program information page with the description, chapters and lessons outline, promotional video and other information added.",
        "Instructors can also review the participants reflections and provide feedback and guidance, a great way to engage with them and accompany them in their spiritual journey! *(Programs can also be set as private).",
        "Students reflect and write on the material provided. Instructors can guide and respond to students’ work in real time.",
        "All participants and instructors can interact with each other in the “Discussion Board”, specific for each course/program.",
      ];
    
    //set tab states tab -> true = schools , tab -> false = institutions
    const [tab, setTab] = useState(false)
    const [schools, setSchools ] = useState('selected')
    const [institutions, setInstitutions ] = useState('')


    const read = () => dispatch(setRead(0));
    const reflect = () => dispatch(setReflect(1));
    const grow = () => dispatch(setGrow(2));
    const create = () => dispatch(setCreate(3));
    const publish = () => dispatch(setPublish(4));
    const monitor = () => dispatch(setMonitor(5));
    const review = () => dispatch(setReview(6));
    const engage = () => dispatch(setEngage(7));

    const imgOne = 'assets/school_coloured2b.png'
    const imgTwo = 'assets/church_coloured2.png'
    

    //handle tab change
    const changeTab = () => {
        if (tab === true)
            { 
                setSchools('selected')
                setInstitutions('')
                setTab(false)
                read()
            }else{
                setSchools('')
                setInstitutions('selected')
                setTab(true)
                create()
            }
    }

    

    return(
        <>
        <AnimationOnScroll animateIn="animate__fadeIn" >   
        <MainWrapper>
            <ButtonWrapper>
                <Button selected = {schools} onClick = {changeTab} >
                    <H3>For schools</H3>  <ButtonImg src = {imgOne}/>
                </Button>
                <Button  selected = {institutions} onClick = {changeTab}>
                    <VerticalLayout>
                        <H3>For institutions</H3> <H4>And parishes</H4>
                    </VerticalLayout>
                    <ButtonImg variation = 'true' src = {imgTwo}/>
                </Button>
            </ButtonWrapper>
                {tab ? (
                    <TabWrapper>
                        <P>Faithcademy provides a complete and simple solution to faith formation allowing private 
                            content delivery and interaction between instructors and group participants.</P>
                        <ButtonWrapper>
                            <ButtonCarousel  onClick={create}>
                               Create
                            </ButtonCarousel>
                            <ButtonCarousel  onClick={publish}>
                               Publish  
                            </ButtonCarousel>
                            <ButtonCarousel  onClick={monitor}>
                                Monitor  
                            </ButtonCarousel>
                            <ButtonCarousel  onClick={review}>
                                Review  
                            </ButtonCarousel>
                            <ButtonCarousel onClick={engage} >
                                Engage  
                            </ButtonCarousel>
                        </ButtonWrapper>
                            <Slides>
                                <CarouselImages src={images[position]}  alt = 'preview'/>
                                <SlidesColumns>
                                    <H1>{tittles[position]}</H1>
                                    <P variation = 'true'>{text[position]} </P>
                                </SlidesColumns>
                            </Slides>
                    </TabWrapper>
                ) : (
                    <TabWrapper>
                        <P>Faith Journals is a collaborative writing software that uses a
                            creative pedagogy that has been proven to inspire students to write about 
                            Sacred Scripture and grow 
                            closer to God, while simultaneously enhancing their writing proficiency.</P>
                        <ButtonWrapper>
                            <ButtonCarousel onClick={read}  variation = 'true'>
                                <ButtonImg2 src = 'assets/book_open_blue.png' />Read 
                            </ButtonCarousel>

                            <ButtonCarousel onClick={reflect}  variation = 'true'>
                                <ButtonImg2 src = 'assets/dove_blue.png'/>Reflect & Write   
                            </ButtonCarousel>

                            <ButtonCarousel onClick={grow} variation = 'true'>
                                <ButtonImg2 src = 'assets/grow.png'/>Grow   
                            </ButtonCarousel>
                        </ButtonWrapper>
                        <Slides>
                            <CarouselImages src={images[position]}  alt = 'preview'/>
                            <SlidesColumns>
                                <H1>{tittles[position]}</H1>
                                <P variation = 'true'>{text[position]} </P>
                            </SlidesColumns>
                        </Slides>
                    </TabWrapper>
                )}
        </MainWrapper>
        </AnimationOnScroll>   
        </>
    )
}
export default Summary;