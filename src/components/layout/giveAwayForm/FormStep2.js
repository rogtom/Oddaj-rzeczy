import React from "react";
import { Formik, Field, Form } from 'formik';
import {InputLabel} from "@material-ui/core";

export const FormStep2 = () => {


    return (
        <div>
            <h3>Krok 2/4</h3>
            <InputLabel >
                Liczba 60l worków:
                <Field type="number" min="0" name="bagNumber" />

            </InputLabel>
        </div>
    )
}