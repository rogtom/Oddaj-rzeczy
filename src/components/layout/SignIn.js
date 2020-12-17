import React, {useState} from "react";
import {ReactComponent as Decoration} from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {useFormik} from "formik";
import * as Yup from 'yup';
import FormInput from "./FormImput";
import {connect} from 'react-redux';
import {signIn} from '../store/actions/authAction';

const SignIn = (props) => {


    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6, 'Password should be longer than 6 characters').required()
        }),
        onSubmit: () => {
            console.log(values);
            // alert(`Login: ${email}, password: ${password}`);
            props.signIn(values)

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
                        id="password"
                        type="password"
                        name="password"
                        label="Hasło"
                        value={values.password}
                        touched={touched.password}
                        error={errors.password}
                        handleBlur={handleBlur}
                        handleChange={handleChange}

                    />
                </div>
                <div className="sign-in-form__btns">

                    <div className="sign-in__form__btn-wrapper">
                        <Link to={ROUTES.SIGN_UP}>Załóż konto</Link>
                        <button type={"submit"}>Zaloguj się</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);