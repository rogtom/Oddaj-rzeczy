import React, {useState} from "react";
import {Formik, Form} from "formik";

import {FormStep1} from "./FormStep1";
import {FormStep2} from "./FormStep2";
import {FormStep3} from "./FormStep3";
import {FormStep4} from "./FormStep4";
import {StepBtn} from "./StepBtn";
import {FormSummary} from "./FormSummary";



const renderStep = (step, values, errors, touched ) => {
    switch (step) {
        case 1:
            return <FormStep1 values={values} errors={errors} touched={touched}/>;
        case 2:
            return <FormStep2 values={values} errors={errors} touched={touched}/>;
        case 3:
            return <FormStep3 values={values} errors={errors} touched={touched} />;
        case 4:
            return <FormStep4 values={values} errors={errors} touched={touched}/>;
        case 5:
            return <FormSummary values={values} errors={errors} touched={touched}/>;
        default:
            return <FormStep1 values={values} errors={errors} touched={touched}/>;
    }

};

const GiveAwayForm = () => {

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
    const handleSubmit = () => {}

    return (
        <div style={{width: "50vw", height: "100%"}}>
            <Formik
                enableReinitialize
                initialValues={{...formData}}
                onSubmit={handleSubmit}
                // validate={validate}
            >
                {({values, errors, touched,handleChange}) => (
                    <Form className={'form-main'}>
                        {renderStep(step, values, errors, touched, handleChange)}
                        <StepBtn step={step} nextStep={handleNextStep} prevStep={handlePrevStep}/>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
export default GiveAwayForm
//     const [email, setEmail] = useState("");
//     const [categories, setCategories] = useState([
//         {id: 1, title: "toys", selected:false},
//         {id: 2, title: "toys", selected:false},
//     ]);
//
//     const handleChangeCheckbox = (categoryId) =>{
//         console.log(categoryId);
//         const updated = categories.map( cat => {
//             if(cat.id === +categoryId){
//                 cat.selected = !cat.selected
//             }
//             return cat;
//         });
//         console.log(updated);
//         setCategories(updated);
//     }
//
//     return (
//         <div>
//             <input type={"text"} value={email} onChange={e=>setEmail(e.target.value)}/>
//             {
//                 categories.map( (cat,i) => (
//                     <input type={"checkbox"} key={cat.id} value={categories[i].id} onChange={ e=> handleChangeCheckbox(e.target.value)} />
//                 ))
//             }
//         </div>
//     )
//
//
// }
// export default GiveAwayForm