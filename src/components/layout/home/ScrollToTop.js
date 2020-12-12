import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import {animateScroll as scroll} from "react-scroll";
import { ReactComponent as UpArrow} from '../../../assets/angle-up-solid.svg'

const handleScrollToTop = () => scroll.scrollToTop()

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisibility] = useState(false);


    useEffect(() => {

        pageYOffset > 100 ? setVisibility(true) : setVisibility(false)

    },[pageYOffset])


    return (
        visible &&  <button className="to-top" onClick={handleScrollToTop}><UpArrow className="up-arrow"/></button>

    )
}
export default ScrollToTop