import React from "react";
import Main from "./startSection/Main";
import WhatsUp from "./oCoChodziSection/WhatsUp";
import AboutUs from "./AboutUs";
import ScrollToTop from "./ScrollToTop";
import { animateScroll as scroll } from 'react-scroll'




const Home = () => {
    return (
        <div className="home">
            <Main />
            <WhatsUp />
            <AboutUs/>


            <ScrollToTop/>
        </div>
    )
}

export default Home