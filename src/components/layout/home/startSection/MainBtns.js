import React from "react";
import BigBtn from "../../BigBtn";

const MainButtons = () => {
    return (
        <>
            {/*<div className="main-btn__give"><span>oddaj</span><span>rzeczy</span></div>*/}
            <BigBtn text1={'oddaj'} text2={'rzeczy'}/>
            <BigBtn text1={'zorganizuj'} text2={'zbiórkę'}/>
            {/*<div className="main-btn__organize"><span>zorganizuj</span><span>zbiórkę</span></div>*/}
        </>
    )

}
export default MainButtons