import React, { useEffect } from "react";
import { ReactComponent as Decoration } from '../../../assets/Decoration.svg'
import {useHistory} from "react-router-dom";

export const FormSuccess = () => {
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push('./')
        },5000)
    },[])

    return (
        <div className={'form-success__wrapper'}>
            <h3>Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</h3>
            <Decoration/>

        </div>
    )
}