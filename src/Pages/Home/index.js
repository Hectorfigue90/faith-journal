import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Hero from '../../Components/HomePage/Sections/Hero'
import Summary from '../../Components/HomePage/Sections/Summary'
import Cards from  '../../Components/HomePage/Sections/Cards'
import Features from '../../Components/HomePage/Sections/Features'
import Testimonials from '../../Components/HomePage/Sections/Testimonials'
import Customers from '../../Components/HomePage/Sections/Customers'
import {
    NavBarWrapper,
    Wrapper
}from './HomeElements'
import Articles from '../../Components/HomePage/Sections/Articles'



const Home = () => {

    return (
        <>
        <Wrapper>
            <NavBarWrapper>
                <Navbar></Navbar>
            </NavBarWrapper>
            <Hero></Hero>
            <Summary></Summary>
            <Cards></Cards>
            <Features></Features>
            <Customers></Customers>
            <Testimonials></Testimonials>
            <Articles></Articles>
            <Footer></Footer>
        </Wrapper>
        </>
    )
}
export default Home;   