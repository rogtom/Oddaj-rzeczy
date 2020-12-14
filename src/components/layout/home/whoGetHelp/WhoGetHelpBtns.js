import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from '../../../../constants/routes'
import Buttons from "../../Buttons";

const WhoGetHelpBtns =() => {
    return (
        <div className="who-get-help-btns__wrapper">
            <Link to={ROUTES.FOUNDATIONS}><Buttons text1={'Fundacjom'} buttonSize={"btn__medium"} o/></Link>
            <Link to={ROUTES.ORGANIZATIONS}><Buttons text1={'Organizacjom'} text2={'pozarządowym'} buttonSize={"btn__medium"}  /></Link>
            <Link to={ROUTES.LOCALS}><Buttons text1={'Lokalnym'} text2={'zbiórkom'} buttonSize={"btn__medium"} /></Link>
        </div>
    )
}
export default WhoGetHelpBtns