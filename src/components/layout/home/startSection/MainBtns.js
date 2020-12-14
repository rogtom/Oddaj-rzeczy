import React from "react";
import Buttons from "../../Buttons";
import { Link } from 'react-router-dom'
import * as ROUTES from '../../../../constants/routes';

const MainButtons = () => {
    return (
        <>
            {/*<div className="main-btn__give"><span>oddaj</span><span>rzeczy</span></div>*/}
            <Link to={ROUTES.SIGN_IN}><Buttons text1={'oddaj'} text2={'rzeczy'} buttonSize={"btn__big"} /></Link>
            <Link to={ROUTES.SIGN_IN}><Buttons text1={'zorganizuj'} text2={'zbiórkę'} buttonSize={"btn__big"} /></Link>
        </>
    )

}
export default MainButtons