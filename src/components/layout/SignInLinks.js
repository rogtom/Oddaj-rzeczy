import React from "react";
import {NavLink} from "react-router-dom";
import * as ROUTES from '../../constants/routes'


const SignInLinks = () => {
    return (
            <div className="log-nav">
                <p className="log-nav__user-name">Cześć jannowak@gmail.com</p>
                <ul>
                    <li><NavLink to={ROUTES.FORM_MAIN}>Oddaj rzeczy</NavLink></li>
                    <li><NavLink to='/'>Wyloguj</NavLink></li>
                </ul>
            </div>
    )
}
export default SignInLinks