import React from "react";
import Buttons from "../Buttons";


export const StepBtn = props => {
    const {step} = props;

    switch (step) {
        case 1 :
            return (
                <>
                    <Buttons
                        text1={'Dalej'}
                        buttonSize={'btn__small'}
                        onClick={props.nextStep}
                    />

                </>
            );
        case 2 :
            return (
                <>
                    <Buttons
                        text1={'Wstecz'}
                        buttonSize={'btn__small'}
                        onClick={props.prevStep}
                    />
                    <Buttons
                        text1={'Dalej'}
                        buttonSize={'btn__small'}
                        onClick={props.nextStep}
                    />
                </>
            );
        case 3 :
            return (
                <>
                    <Buttons
                        text1={'Wstecz'}
                        buttonSize={'btn__small'}
                        onClick={props.prevStep}
                    />
                    <Buttons
                        text1={'Dalej'}
                        buttonSize={'btn__small'}
                        onClick={props.nextStep}
                    />
                </>
            );
            case 4 :
            return (
                <>
                    <Buttons
                    text1={'Wstecz'}
                    buttonSize={'btn__small'}
                    onClick={props.prevStep}
                />
                    <Buttons
                        text1={'Dalej'}
                        buttonSize={'btn__small'}
                        onClick={props.nextStep}
                    />
                </>
            );
        case 5:
            return (
                <>
                    <Buttons
                        text1={'Gotowe'}
                        buttonSize={'btn__small'}
                        type={'submit'}
                    />
                </>
            );
        default:
            return <></>;
    }
};