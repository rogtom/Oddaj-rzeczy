import React from "react";


const WhoGetHelpCard = ({ title, mission, stuff }) => {
    return (
        <li className="who-get-help-card__wrapper">
            <div>
                <h4 className="who-get-help-card__title">{title}</h4>
                <p className="who-get-help-card__goal">{mission}</p>
            </div>
            <p className="who-get-help-card__stuff">{stuff}</p>
        </li>
    )
}
export default WhoGetHelpCard