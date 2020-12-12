import React from "react";
import BigBtn from "../../BigBtn";
import {Link} from "react-router-dom";
import * as ROUTES from "../../../../constants/routes";


const GiveAway = () => {
    return (
        <div className="give-away__wrapper">
            <Link to={ROUTES.SIGN_IN}><BigBtn text1={'oddaj'} text2={'rzeczy'}/></Link>
        </div>
    )
}
export default GiveAway