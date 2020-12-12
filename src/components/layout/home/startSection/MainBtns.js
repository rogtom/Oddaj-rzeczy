import React from "react";
import BigBtn from "../../BigBtn";
import { Link } from 'react-router-dom'
import * as ROUTES from '../../../../constants/routes';

const MainButtons = () => {
    return (
        <>
            {/*<div className="main-btn__give"><span>oddaj</span><span>rzeczy</span></div>*/}
            <Link to={ROUTES.SIGN_IN}><BigBtn text1={'oddaj'} text2={'rzeczy'} /></Link>
            <Link to={ROUTES.SIGN_IN}><BigBtn text1={'zorganizuj'} text2={'zbiórkę'} /></Link>
            {/*<div className="main-btn__organize"><span>zorganizuj</span><span>zbiórkę</span></div>*/}
        </>
    )

}
export default MainButtons