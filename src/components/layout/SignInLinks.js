import React from "react";
import {NavLink, Link} from "react-router-dom";
import * as ROUTES from '../../constants/routes'
import { connect} from "react-redux";
import {signOut} from "../store/actions/authAction";


const SignInLinks = () => {
    return (
            <div className="log-nav">
                <p className="log-nav__user-name">Cześć jannowak@gmail.com</p>
                <ul>
                    <li><NavLink to={ROUTES.FORM_MAIN}>Oddaj rzeczy</NavLink></li>
                    <li><Link to='/' onClick={signOut}>Wyloguj</Link></li>
                </ul>
            </div>
    )
}


export default SignInLinks