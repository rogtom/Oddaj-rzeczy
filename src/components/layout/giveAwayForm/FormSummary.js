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
                    <div className={'form-summary__details'}>
                        <div>
                            <h3>Adres odbioru:</h3>
                            <ul className={'form-summary__address'}>
                                <li><span
                                    className={'form-summary__address__title'}>Ulica</span><span>{values.street}</span>
                                </li>
                                <li><span
                                    className={'form-summary__address__title'}>Miasto</span><span>{values.city}</span>
                                </li>
                                <li><span
                                    className={'form-summary__address__title'}>Kod pocztowy</span><span>{values.zipCode}</span>
                                </li>
                                <li><span
                                    className={'form-summary__address__title'}>Numer telefonu</span><span>{values.phone}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Termin odbioru:</h3>
                            <ul className={'form-summary__address'}>
                                <li><span
                                    className={'form-summary__address__title'}>Data </span><span>{values.date}</span>
                                </li>
                                <li><span
                                    className={'form-summary__address__title'}>Godzina </span><span>{values.hour}</span>
                                </li>
                                <li><span
                                    className={'form-summary__address__title'}>Uwagi dla kuriera </span><span>{values.comments}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}