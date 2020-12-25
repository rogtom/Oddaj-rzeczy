import React from "react";
import { ReactComponent as Decoration } from '../../../assets/Decoration.svg'

export const FormSuccess = () => {


    return (
        <div className={'form-success__wrapper'}>
            <h3>Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</h3>
            <Decoration/>

        </div>
    )
}