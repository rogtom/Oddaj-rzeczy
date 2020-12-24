import React from "react";

import {ReactComponent as Decoration} from '../../../assets/Decoration.svg';
import Contact from "../home/Contact";
import FormImportantMsg from "./giveAwayFormImpotrtantMsg";

import FormPageContainer from "./giveAwayFormContainer";

const GiveAwayFormMain = () => {


    return (


        <div className="give-away-form-main">
            <div className='give-away-form-main__wrapper'>
                <div className="give-away-form__bg">

                </div>
                <div className="give-away-form__text-content">
                    <h2 className="give-away-form__text-content-title">Oddaj rzeczy, których już nie chcesz
                        POTRZEBUJĄCYM</h2>
                    <Decoration/>
                    <h3>Wystarczą 4 proste kroki:</h3>
                    <div className="give-away-form__steps-wrapper">
                        <div className="give-away-form__steps-square">
                            <div className="give-away-form__steps-texts">
                                <span>1</span>
                                <p>{`Wybierz \nrzeczy`}</p>
                            </div>
                        </div>
                        <div className="give-away-form__steps-square">
                            <div className="give-away-form__steps-texts">
                                <span>1</span>
                                <p>{`Wybierz \nrzeczy`}</p>
                            </div>
                        </div>
                        <div className="give-away-form__steps-square">
                            <div className="give-away-form__steps-texts">
                                <span>1</span>
                                <p>{`Wybierz \nrzeczy`}</p>
                            </div>
                        </div>
                        <div className="give-away-form__steps-square">
                            <div className="give-away-form__steps-texts">
                                <span>1</span>
                                <p>{`Wybierz \nrzeczy`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FormImportantMsg />
            <FormPageContainer />
            <Contact />
        </div>


    );
}
export default GiveAwayFormMain