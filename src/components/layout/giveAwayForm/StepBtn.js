import React from "react";
import Buttons from "../Buttons";


export const StepBtn = props => {
    const {step} = props;

    switch (step) {
        case 1 :
            return (
                <div className={"form-btn__wrapper"}>
                    {/*<Buttons*/}
                    {/*    text1={'Dalej'}*/}
                    {/*    buttonSize={'btn__small'}*/}
                    {/*    onClick={props.nextStep}*/}

                    {/*/>*/}
                    <span onClick={props.nextStep}>dalej</span>


                </div>
            );
        case 2 :
            return (
                <div className={"form-btn__wrapper"}>
                    {/*<Buttons*/}
                    {/*    text1={'Wstecz'}*/}
                    {/*    buttonSize={'btn__small'}*/}
                    {/*    onClick={props.prevStep}*/}

                    {/*/>*/}
                    {/*<Buttons*/}
                    {/*    text1={'Dalej'}*/}
                    {/*    buttonSize={'btn__small'}*/}
                    {/*    onClick={props.nextStep}*/}

                    {/*/>*/}
                    <span onClick={props.prevStep}>wstecz</span>
                    <span onClick={props.nextStep}>dalej</span>
                </div>
            );
        case 3 :
            return (
                <div className={"form-btn__wrapper"}>
                    {/*<Buttons*/}
                    {/*    text1={'Wstecz'}*/}
                    {/*    buttonSize={'btn__small'}*/}
                    {/*    onClick={props.prevStep}*/}
                    {/*/>*/}
                    {/*<Buttons*/}
                    {/*    text1={'Dalej'}*/}
                    {/*    buttonSize={'btn__small'}*/}
                    {/*    onClick={props.nextStep}*/}
                    {/*/>*/}
                    <span onClick={props.prevStep}>wstecz</span>
                    <span onClick={props.nextStep}>dalej</span>
                </div>
            );
        case 4 :
            return (
                <div className={"form-btn__wrapper"}>
                    {/*<Buttons*/}
                    {/*    text1={'Wstecz'}*/}
                    {/*    buttonSize={'btn__small'}*/}
                    {/*    onClick={props.prevStep}*/}
                    {/*/>*/}
                    {/*<Buttons*/}
                    {/*    text1={'Dalej'}*/}
                    {/*    buttonSize={'btn__small'}*/}
                    {/*    onClick={props.nextStep}*/}
                    {/*/>*/}
                    <span onClick={props.prevStep}>wstecz</span>
                    <span onClick={props.nextStep}>dalej</span>
                </div>
            );
        case 5:
            return (
                <div className={"form-btn__wrapper"}>
                    <span onClick={props.prevStep}>wstecz</span>
                    {/*<Buttons*/}
                    {/*    text1={'Wstecz'}*/}
                    {/*    buttonSize={'btn__small'}*/}
                    {/*    onClick={props.prevStep}*/}
                    {/*/>*/}
                    {/*<Buttons*/}
                    {/*    text1={'Gotowe'}*/}
                    {/*    buttonSize={'btn__small'}*/}
                    {/*    type={'submit'}*/}
                    {/*/>*/}

                    <button type={'submit'}>Gotowe</button>

                </div>
            );
        default:
            return <></>;
    }
};