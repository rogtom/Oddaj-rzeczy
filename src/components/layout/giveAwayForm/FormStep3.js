import React from "react";
import {Field} from "formik";


export const FormStep3 = (props) => {


    return (
        <div className={'form-step-2__wrapper'}>
            <h3>Krok 3/4</h3>

            <label className={'form-step-2__title'}>
                Lokalizacja:
                <Field name="location" as={'select'}>

                    <option value={" "}>Wybierz lokalizacje...</option>
                    <option value={"Warszawa"}>Warszawa</option>
                    <option value={"Kraków"}>Kraków</option>
                    <option value={"Katowice"}>Katowice</option>
                    <option value={"Poznań"}>Poznań</option>
                    <option value={"Wrocław"}>Wrocław</option>
                </Field>
            </label>


            <label>
                Komu chcesz pomóc?

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
            </label>

            <div className="who-get-help__organization-name">
                <label>
                    Wpisz nazwę konkretnej organizacji (opcjonalnie)
                </label>
                <Field type={"text"} name={"organizationName"} className={'who-get-help__input'}/>
            </div>

        </div>
    )
}