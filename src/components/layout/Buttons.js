import React from "react";

const STYLES = [
    'btn__primary',
    'btn__outline'
]

const SIZE = [
    'btn__small',
    'btn__medium',
    'btn__big'
]

const Buttons = ({text1, text2, type, onClick, buttonStyle, buttonSize, color }) => {

    const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return (

        <button className={`btn ${checkStyle} ${checkSize}`} onClick={onClick} type={type} ><span>{text1}</span><span>{text2}</span></button>
    )
}

export default Buttons