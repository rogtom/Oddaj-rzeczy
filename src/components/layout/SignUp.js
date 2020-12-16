import {ReactComponent as Decoration} from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {useFormik} from "formik";
import * as Yup from "yup";
import FormInput from "./FormImput";
import React from "react";

const SignUp = () => {

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6, 'Password should be longer than 6 characters').required()
        }),
        onSubmit: ({email, password}) => {
            alert(`Login: ${email}, password: ${password}`);
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
                    <FormInput
                        id="password"
                        type="password"
                        name="password"
                        label="Powtórz hasło"
                        value={values.password}
                        touched={touched.password}
                        error={errors.password}
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

    // return (
    //     <div className="sign-in__wrapper">
    //         <h1 className="sign-in__title">Załóż konto</h1>
    //         <Decoration className="sign-in__decoration"/>
    //         <form className="sign-in__form">
    //             <label htmlFor="">Email</label>
    //             <input type="email" name={'email'}/>
    //             <label htmlFor="">Hasło</label>
    //             <input type="password" name={'password'}/>
    //             <label htmlFor="">Powtórz hasło</label>
    //             <input type="password" name={'password'}/>
    //
    //         </form>
    //         <div className="sign-in__form__btn-wrapper">
    //             <Link to={ROUTES.SIGN_IN}>Zaloguj się</Link>
    //             <button type={"submit"}>Załóż konto</button>
    //         </div>
    //     </div>
    // )
}
export default SignUp;