import React from 'react'
import {TittleWrapper, H1,H2, H3, P, MainWrapper, ArticleWrappers, ArticleContainer, Button, ButtonImg, ArticleDetails} from './ArticlesElements'

const Articles = () => {

    return(
        <MainWrapper>
         
            <TittleWrapper>
                <H1>Related articles and media</H1>
            </TittleWrapper>
            <ArticleWrappers>
                <ArticleContainer>
                    <Button>
                        <ButtonImg src = 'assets/Articles/media1.png'>
                        </ButtonImg>
                    </Button>
                    <ArticleDetails>
                        <H3>
                            YOUTUBE VIDEO
                        </H3>
                        <H3 variation='true'>
                            32 SEC LONG
                        </H3>
                    </ArticleDetails>
                    <H2>
                            Faith Journals classroom publishing celebration day
                    </H2>
                    <P>
                        Celebration on the day they received their paperback copies of the Journals.
                    </P>
                </ArticleContainer>
                <ArticleContainer>
                    <Button>
                        <ButtonImg src = 'assets/Articles/media2.png'>
                        </ButtonImg>
                    </Button>
                    <ArticleDetails>
                        <H3>
                            YOUTUBE VIDEO
                        </H3>
                        <H3 variation='true'>
                            32 SEC LONG
                        </H3>
                    </ArticleDetails>
                    <H2>
                            Faith Journals classroom publishing celebration day
                    </H2>
                    <P>
                        Celebration on the day they received their paperback copies of the Journals.
                    </P>
                </ArticleContainer>
                <ArticleContainer>
                    <Button>
                        <ButtonImg src = 'assets/Articles/media3.png'>
                        </ButtonImg>
                    </Button>
                    <ArticleDetails>
                        <H3>
                            YOUTUBE VIDEO
                        </H3>
                        <H3 variation='true'>
                            32 SEC LONG
                        </H3>
                    </ArticleDetails>
                    <H2>
                            Faith Journals classroom publishing celebration day
                    </H2>
                    <P>
                        Celebration on the day they received their paperback copies of the Journals.
                    </P>
                </ArticleContainer>
                <ArticleContainer>
                    <Button>
                        <ButtonImg src = 'assets/Articles/media4.png'>
                        </ButtonImg>
                    </Button>
                    <ArticleDetails>
                        <H3>
                            YOUTUBE VIDEO
                        </H3>
                        <H3 variation='true'>
                            32 SEC LONG
                        </H3>
                    </ArticleDetails>
                    <H2>
                            Faith Journals classroom publishing celebration day
                    </H2>
                    <P>
                        Celebration on the day they received their paperback copies of the Journals.
                    </P>
                </ArticleContainer>
            </ArticleWrappers>
        </MainWrapper>
    )

}
export default Articles;