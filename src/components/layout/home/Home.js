import React from "react";
import Main from "./startSection/Main";
import WhatsUp from "./oCoChodziSection/WhatsUp";
import AboutUs from "./AboutUs";
import ScrollToTop from "./ScrollToTop";
import WhoGetHelp from "./whoGetHelp";

import Contact from "./Contact";


const Home = () => {
    return (
        <div className="home">
            <Main/>
            <WhatsUp/>
            <AboutUs/>
            <WhoGetHelp/>
            <Contact/>



            <ScrollToTop/>
        </div>
    )
}

export default Home