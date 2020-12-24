import React from "react";
import { Field } from 'formik';
import {InputLabel} from "@material-ui/core";

export const FormStep2 = () => {


    return (
        <div className={'form-step-2__wrapper'}>
            <h3>Krok 2/4</h3>
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <InputLabel >
                Liczba 60l worków:
                {/*<Field type="number" min="0" name="bagNumber" />*/}
                <Field as={'select'}  name="bagNumber">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                </Field>


            </InputLabel>
        </div>
    )
}