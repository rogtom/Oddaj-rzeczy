import React from "react";
import Buttons from "../../Buttons";
import {Link} from "react-router-dom";
import * as ROUTES from "../../../../constants/routes";


const GiveAway = () => {
    return (
        <div className="give-away__wrapper">
            <Link to={ROUTES.SIGN_IN}><Buttons text1={'oddaj'} text2={'rzeczy'} buttonSize={'btn__big'}/></Link>
        </div>
    )
}
export default GiveAway