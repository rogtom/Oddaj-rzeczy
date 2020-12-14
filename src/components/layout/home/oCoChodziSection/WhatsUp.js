import React from "react";
import Statistics from "./Statistic";
import ForSteps from "./4steps";
import WhatToDo from "./whatToDo";
import GiveAway from "./giveAway";





const WhatsUp = () => {
    return (

        <div className={"whats-up__wrapper"}>
            <Statistics/>
            <ForSteps/>
            <WhatToDo/>
            <GiveAway/>

        </div>
    )
}
export default WhatsUp