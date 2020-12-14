import React from "react";
import FacebookIcon from '../../../assets/Facebook.svg';
import InstagramIcon from '../../../assets/Instagram.svg';


const Footer = () => {
    return (
        <div className="footer__wrapper">
            <h1 className='footer__title'>Copyright by Tomasz Rogala</h1>
            <div className="footer__media">
                <img src={FacebookIcon} alt="FacebookIcon"/>
                <img src={InstagramIcon} alt="InstagramIcon"/>
            </div>
        </div>
    )
}
export default Footer