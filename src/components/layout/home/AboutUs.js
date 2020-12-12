import React from "react";
import { ReactComponent as Decoration} from '../../../assets/Decoration.svg'
import Signature  from '../../../assets/Signature.svg'
import People from '../../../assets/People.jpg'



const AboutUs = () => {
    return (
        <div className="about-us__wrapper" id='about-us'>
            <div className="about-us__info">
                <h2 className="about-us__title">O nas</h2>
                <Decoration/>
                <p className="about-us__description">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={Signature} alt="" className="about-us__signature"/>
            </div>
            <div className="about-us__graphic">
                <img src={People} alt="" className="about-us__img"/>
            </div>
        </div>
    )
}
export default AboutUs