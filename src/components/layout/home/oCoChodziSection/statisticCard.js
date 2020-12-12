import React from "react";


const StatisticCard = ({ number, title, description }) => {
    return (
        <div className="statistics-card">
            <span className='statistics-card__number'>{number}</span>
            <h3 className="statistics-card__title">{title}</h3>
            <p className="statistics-card__description">{description}</p>
        </div>
    )
}
export default StatisticCard