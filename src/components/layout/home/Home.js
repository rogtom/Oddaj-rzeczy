import React from "react";
import Main from "./startSection/Main";
import WhatsUp from "./oCoChodziSection/WhatsUp";
import AboutUs from "./AboutUs";
import ScrollToTop from "./ScrollToTop";
import {animateScroll as scroll} from 'react-scroll'
import WhoGetHelp from "./whoGetHelp";
import Footer from "./Footer";
import {BrowserRouter as Router} from "react-router-dom";
import Contact from "./Contact";


const Home = () => {
    return (
        <div className="home">
            <Main/>
            <WhatsUp/>
            <AboutUs/>
            <WhoGetHelp/>
            <Contact/>
            <Footer/>


            <ScrollToTop/>
        </div>
    )
}

export default Home