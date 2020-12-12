import React from "react";
import MainButtons from "./MainBtns";
import HomeHeroImage from "../../../../assets/Home-Hero-Image.jpg"
import { ReactComponent as Decoration } from '../../../../assets/Decoration.svg'



const Main = () => {
    return (
        <div className="main-wrapper" id='main-wrapper'>

            <img src={HomeHeroImage} alt="" className="main-bg" />

            <div className="grid-item main-content">
                <div className="main-content__title">
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                </div>

                <Decoration className="main-content__decoration"/>

                <div className="main-content__btn-wrapper">
                    <MainButtons/>
                </div>
            </div>
        </div>

    )
}
export default Main