import React from "react";
import { NavLink, Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes'
import { connect} from "react-redux";
import {signOut} from "../store/actions/authAction";



const SignInLinks = (props) => {
    console.log(props);




    return (
        <div className="log-nav">
            <p className="log-nav__user-name">Cześć {props.auth.email}</p>
            <ul>
                <li><NavLink to={ROUTES.FORM_MAIN}>Oddaj rzeczy</NavLink></li>
                <li>
                    <Link to={ROUTES.SIGN_OUT} onClick={props.signOut}>Wyloguj</Link>
                </li>
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInLinks);