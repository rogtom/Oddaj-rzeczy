import {ReactComponent as Decoration} from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {useFormik} from "formik";
import * as Yup from "yup";
import FormInput from "./FormImput";
import React from "react";
import {signUp} from '../store/actions/authAction'
import {connect} from 'react-redux';

const SignUp = (props) => {
    console.log(props);

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            email: '',
            password1: '',
            password2: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6, 'Password should be longer than 6 characters').required()
        }),
        onSubmit: () => {
            console.log(values);
            alert(`Login: ${values.email}, password: ${values.password1}`);

        }
    })


    return (
        <div className="sign-in__wrapper">
            <h1 className="sign-in__title">Zaloguj się</h1>
            <Decoration className="sign-in__decoration"/>
            <form onSubmit={handleSubmit}>
                <div className="sign-in__form"><FormInput
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    touched={touched.email}
                    error={errors.email}
                    handleBlur={handleBlur}
                    handleChange={handleChange}

                />
                    <FormInput
                        id="password1"
                        type="password"
                        name="password1"
                        label="Hasło"
                        value={values.password1}
                        touched={touched.password1}
                        error={errors.password1}
                        handleBlur={handleBlur}
                        handleChange={handleChange}

                    />
                    <FormInput
                        id="password2"
                        type="password"
                        name="password2"
                        label="Powtórz hasło"
                        value={values.password2}
                        touched={touched.password2}
                        error={errors.password2}
                        handleBlur={handleBlur}
                        handleChange={handleChange}

                    />
                </div>
                <div className="sign-in-form__btns">

                    <div className="sign-in__form__btn-wrapper">
                        <Link to={ROUTES.SIGN_IN}>Zaloguj się</Link>
                        <button type={"submit"}>Załóż konto</button>
                    </div>
                </div>
            </form>

        </div>
    )


}


const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (credentials) => dispatch(signUp(credentials))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);