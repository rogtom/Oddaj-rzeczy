import React from "react";
import {NavLink} from "react-router-dom";
import * as ROUTES from "../../constants/routes";



const SignOutLinks = () => {
    return (

            <div className="log-nav">

                    <NavLink className="log-nav__sign-in" to={ROUTES.SIGN_IN}>Zaloguj</NavLink>
                    <NavLink className="log-nav__sign-up" to={ROUTES.SIGN_UP}>Załóż konto</NavLink>

            </div>

    )
}
export default SignOutLinks