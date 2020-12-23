import React from "react";
import {Field} from "formik";
import {
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    CheckboxProps,
    FormControlLabel,
    FormGroup,
    MenuItem,
    TextField,
    Typography
}
    from '@material-ui/core';


export const FormStep3 = (props) => {


    return (
        <div>
            <h1>Krok 3/4</h1>
            <Field name="location" as={TextField} select label={"lokalizacja:"}>

                <MenuItem value={"Warszawa"}>Warszawa</MenuItem>
                <MenuItem value={"Kraków"}>Kraków</MenuItem>
                <MenuItem value={"Katowice"}>Katowice</MenuItem>
                <MenuItem value={"Poznań"}>Poznań</MenuItem>
                <MenuItem value={"Wrocław"}>Wrocław</MenuItem>
            </Field>

            <div className={'who-get-help-checkbox__wrapper'}>
                <Field type="checkbox" name="whoGetCheck" value="dzieciom"
                       className={'who-get-help-checkbox checkbox-1'}/>

                <Field type="checkbox" name="whoGetCheck" value="samotnym matkom"
                       className={'who-get-help-checkbox checkbox-2'}/>
                <Field type="checkbox" name="whoGetCheck" value="bezdomnym"
                       className={'who-get-help-checkbox checkbox-3'}/>
                <Field type="checkbox" name="whoGetCheck" value="niepełnosprawnym"
                       className={'who-get-help-checkbox checkbox-4'}/>
                <Field type="checkbox" name="whoGetCheck" value="osobom starszym"
                       className={'who-get-help-checkbox checkbox-5'}/>
            </div>

            <div className="who-get-help__organization-name">
                <label>
                Wpisz nazwę konkretnej organizacji (opcjonalnie)
            </label>
                <Field type={"text"} name={"organizationName"} className={'who-get-help__input'}/>
            </div>

        </div>
    )
}