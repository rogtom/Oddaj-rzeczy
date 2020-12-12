import React from "react";

const ForStepsCard = ({ children, title, description }) => {

    return (
        <div className="whatToDo-card">
            <img src={children} alt=""/>
            <h4 className="whatToDo-card__title">{title}</h4>
            <span className="whatToDo-card__decor"/>
            <p className="whatToDo-card__description">{description}</p>
        </div>


    )
}
export default ForStepsCard