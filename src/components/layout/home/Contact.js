import React from "react";

import { ReactComponent as Decoration } from '../../../assets/Decoration.svg'
import Buttons from "../Buttons";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="contact__wrapper" id="contact" >
            <div className="contact__bg">
                <div className="contact__bg"></div>
            </div>

            <div className="contact__form-wrapper">
                <h2 className="contact__title">Skontaktuj się z nami</h2>
                <Decoration/>
                <form className='contact__form'>
                    <div className="contact__inputs-wrapper">
                        <label htmlFor="name" className="contact--name">Wpisz swoje imię
                            <input type="text" name={'name'} className="contact-input__name"/>
                        </label>
                        <label htmlFor="email" className="contact--email">Wpisz swój email
                            <input type="email" name={'email'} className="contact-input__email"/>
                        </label>
                    </div>
                    <label htmlFor="message" className="contact__message">Wpisz swój email
                        <textarea name="message" id="message" rows="5" />
                    </label>
                    <Buttons type={'submit'} text1={'Wyślij'} buttonSize={"btn__small"} />
                </form>
            </div>
            <Footer/>
        </div>
    )
}
export default Contact