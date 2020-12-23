import React from "react";
import { Field } from 'formik';


export const FormStep1 = (props) => {


    return (
        <div className={'form-step-1__wrapper'}>
            <h3>Krok 1/4</h3>
            <label>
                <Field type="checkbox" name="whatToGiveCheck" value="ubrania, które nadają się do ponownego użycia" />
                ubrania, które nadają się do ponownego użycia
            </label>
            <label>
                <Field type="checkbox" name="whatToGiveCheck" value="ubrania, do wyrzucenia" />
                ubrania, do wyrzucenia
            </label>
            <label>
                <Field type="checkbox" name="whatToGiveCheck" value="zabawki" />
                zabawki
            </label>
            <label>
                <Field type="checkbox" name="whatToGiveCheck" value="książki" />
                książki
            </label>
            <label>
                <Field type="checkbox" name="whatToGiveCheck" value="Inne" />
                Inne
            </label>
        </div>
    )
}