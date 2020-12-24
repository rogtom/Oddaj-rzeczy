import React from "react";


export const FormSummary = (props) => {

    const {values} = props;
    return (
        <>
            <div className={'form-summary'}>
                <h2>Podsumowanie Twojej darowizny</h2>

                <div className={'form-summary__give-back'}>

                    <h3>Oddajesz:</h3>
                    <div className={'form-summary__give-back__things'}>
                        <div className={'form-summary__things'}/>
                        <span>{values.bagNumber} worki, {values.whatToGiveCheck.map((el, i) => <span
                            key={i}>{el}, </span>)}
                            {values.whoGetCheck.map((el, i) => <span key={i}>{el}, </span>)}</span>

                    </div>
                    <div className={'form-summary__give-back__things'}>
                        <div className={'form-summary__location'}/>
                        <span>dla lokalizacji: {values.location}, </span>
                        {values.organizationName.length !== 0 && <span>Organizacja: {values.organizationName}</span>}
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </>
    );
}