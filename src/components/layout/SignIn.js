import React from "react";
import {ReactComponent as Decoration} from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const SignIn = () => {
    return (
        <div className="sign-in__wrapper">
            <h1 className="sign-in__title">Zaloguj się</h1>
            <Decoration className="sign-in__decoration"/>
            <form className="sign-in__form">
                <label htmlFor="">Email</label>
                <input type="email" name={'email'}/>
                <label htmlFor="">Hasło</label>
                <input type="password" name={'email'}/>
            </form>
            <div className="sign-in__form__btn-wrapper">
                <Link to={ROUTES.SIGN_UP}>Załóż konto</Link>
                <button type={"submit"}>Zaloguj się</button>
            </div>
        </div>
    )
}
export default SignIn;