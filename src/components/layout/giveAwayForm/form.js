import React, {useState} from "react";
import {Formik, Form} from "formik";
import {connect} from 'react-redux'
import {saveFormToFirestore} from '../../store/actions/giveAwayFormActions'

import {FormStep1} from "./FormStep1";
import {FormStep2} from "./FormStep2";
import {FormStep3} from "./FormStep3";
import {FormStep4} from "./FormStep4";
import {StepBtn} from "./StepBtn";
import {FormSummary} from "./FormSummary";
import {FormSuccess} from "./FormSuccess";

import {useHistory} from "react-router-dom";


const renderStep = (step, values, errors, touched) => {
    switch (step) {
        case 1:
            return <FormStep1 values={values} errors={errors} touched={touched}/>;
        case 2:
            return <FormStep2 values={values} errors={errors} touched={touched}/>;
        case 3:
            return <FormStep3 values={values} errors={errors} touched={touched}/>;
        case 4:
            return <FormStep4 values={values} errors={errors} touched={touched}/>;
        case 5:
            return <FormSummary values={values} errors={errors} touched={touched}/>;
            case 6:
            return <FormSuccess values={values} errors={errors} touched={touched}/>;
        default:
            return <FormStep1 values={values} errors={errors} touched={touched}/>;
    }

};

const GiveAwayForm = (props) => {
    console.log(props);

    const [step, setStep] = useState(1);
    // const classes = useStyles();
    const formData = {
        whatToGiveCheck: [],
        bagNumber: "",
        location: [],
        whoGetCheck: [],
        organizationName: "",
        street: "",
        city: "",
        zipCode: "",
        phone: "",
        date: "",
        hour: "",
        comments: "",
    };
    const handleNextStep = () => setStep(step => step + 1);
    const handlePrevStep = () => setStep(step => step - 1);
    const history = useHistory();
    const handleSubmit = (values) => {
        // console.log(values)
        props.saveFormToFirestore(values, props.auth.uid)
        setStep(step => step + 1)
    }

    return (
        <div style={{width: "50vw", height: "100%"}}>
            <Formik
                enableReinitialize
                initialValues={{...formData}}
                onSubmit={handleSubmit}
                // validate={validate}
            >
                {({values, errors, touched, handleChange}) => (
                    <Form className={'form-main'}>
                        {renderStep(step, values, errors, touched, handleChange)}
                        <StepBtn step={step} nextStep={handleNextStep} prevStep={handlePrevStep}/>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveFormToFirestore: (data, userID) => dispatch(saveFormToFirestore(data, userID))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GiveAwayForm)
