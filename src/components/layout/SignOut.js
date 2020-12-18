import React from "react";
import {ReactComponent as Decoration} from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const SignOut = () => {
    return (
        <div className="sign-in__wrapper">
            <h1 className="sign-in__title">Wylogowanie nastąpiło pomyślnie!</h1>
            <Decoration className="sign-in__decoration"/>


                <Link to={ROUTES.HOME}><button className="sign-out__btn">Strona główna</button></Link>


        </div>
    )
}
export default SignOut;