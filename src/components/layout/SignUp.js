import {ReactComponent as Decoration} from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const SignUp = () => {
    return (
        <div className="sign-in__wrapper">
            <h1 className="sign-in__title">Załóż konto</h1>
            <Decoration className="sign-in__decoration"/>
            <form className="sign-in__form">
                <label htmlFor="">Email</label>
                <input type="email" name={'email'}/>
                <label htmlFor="">Hasło</label>
                <input type="password" name={'password'}/>
                <label htmlFor="">Powtórz hasło</label>
                <input type="password" name={'password'}/>
            </form>
            <div className="sign-in__form__btn-wrapper">
                <Link to={ROUTES.SIGN_IN}>Zaloguj się</Link>
                <button type={"submit"}>Załóż konto</button>
            </div>
        </div>
    )
}
export default SignUp;