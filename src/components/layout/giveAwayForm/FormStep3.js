import React from "react";
import {Field} from "formik";



export const FormStep3 = (props) => {


    return (
        <div>
            <h1>Krok 3/4</h1>

            <Field name="location" as={'select'} >

                <option value={" "}>Wybierz lokalizacje...</option>
                <option value={"Warszawa"}>Warszawa</option>
                <option value={"Kraków"}>Kraków</option>
                <option value={"Katowice"}>Katowice</option>
                <option value={"Poznań"}>Poznań</option>
                <option value={"Wrocław"}>Wrocław</option>
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