import React from "react";
import StatisticCard from "./statisticCard";


const Statistics = () => {
    return (
        <div className="statistics-panel" id="section-2">
<StatisticCard number={10} title={'oddanych worków'} description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
<StatisticCard number={5} title={'wspartych organizacji'} description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
<StatisticCard number={7} title={'zorganizowanych zbiórek'} description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
        </div>
    )
}
export default Statistics