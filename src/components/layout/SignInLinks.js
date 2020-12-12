import React from "react";
import {NavLink} from "react-router-dom";


const SignInLinks = () => {
    return (
        <div>
            <div className="log-nav">
                <p className="log-nav__user-name">Cześć jannowak@gmail.com</p>
                <ul>
                    <li><NavLink to='/'>Oddaj rzeczy</NavLink></li>
                    <li><NavLink to='/'>Wyloguj</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default SignInLinks