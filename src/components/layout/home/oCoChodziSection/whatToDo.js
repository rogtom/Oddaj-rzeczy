import React from "react";
import ForStepsCard from "./whatToDoCard";
import Icon1  from '../../../../assets/Icon-1.svg'
import Icon2  from '../../../../assets/Icon-2.svg'
import Icon3  from '../../../../assets/Icon-3.svg'
import Icon4  from '../../../../assets/Icon-4.svg'



const WhatToDo = () => {
    return (
        <div className="whatToDo-wrapper">
    <ForStepsCard children={Icon1} title={'Wybierz rzeczy'} description={'ubrania, zabawki, sprzęt i inne'}/>
    <ForStepsCard children={Icon2} title={'Spakuj je'} description={'skorzystaj z worków na śmieci'}/>
    <ForStepsCard children={Icon3} title={'Zdecyduj komu chcesz pomóc'} description={'wybierz zaufane miejsce'}/>
    <ForStepsCard children={Icon4} title={'Zamów kuriera'} description={'kurier przyjedzie w dogodnym terminie'}/>

        </div>
    )
}
export default WhatToDo