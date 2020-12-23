import React from "react";
import {Field} from "formik";

export const FormStep4 = () => {


    return (
        <div className={'who-get-help__step4'}>
            <h3>Krok 4/4</h3>
            <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
            <div className={'who-get-help__step4__wrapper'}>
                <div className="who-get-help__adres-wrapper">
                    <h3 className="date-of-receipt__title">Adres odbioru:</h3>
                    <Field type={"text"} name={"street"}
                           className={'date-of-receipt__input'}/>
                    <Field type={"text"} name={"city"}
                           className={'date-of-receipt__input'}/>
                    <Field type={"text"} name={"zipCode"}
                           className={'date-of-receipt__input'}/>
                    <Field type={"text"} name={"phone"}
                           className={'date-of-receipt__input'}/>

                </div>


                <div className="who-get-help__date-of-receipt-wrapper">
                    <h3 className="date-of-receipt__title">Termin odbioru:</h3>
                    <Field type={"text"} name={"date"}
                           className={'date-of-receipt__input'}/>
                    <Field type={"text"} name={"hour"}
                           className={'date-of-receipt__input'}/>
                    <Field as={'textarea'} name={"comments"}
                           className={'date-of-receipt__input'} rows={5}/>
                </div>
            </div>

        </div>
    )
}