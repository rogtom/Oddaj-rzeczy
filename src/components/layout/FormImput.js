import React from "react";

const FormInput = ({id, label, error, touched, handleChange, handleBlur, value, ...inputProps }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                id={id}
                {...inputProps}
            />
            {touched && error ? (
                <div className="form-error">{error}</div>
            ): null}
        </>
    )
}
export default FormInput;