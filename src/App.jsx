import React from 'react';
import Header from './Component/Header/Header';
import Nav from './Component/Nav/Nav';
import About from './Component/About/About';
import Experience from './Component/Experience/Experience';
import Services from './Component/Services/Services';
import Portfolio from './Component/Portfolio/Portfolio';
import Testimonial from './Component/Certificate/Certificate';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Company from './Component/Company/Company';

const App=()=>{
    return(
        <>
        <Header/>
        <Nav/>
        <About/>
        <Company/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        </>
    )
}
export default App;