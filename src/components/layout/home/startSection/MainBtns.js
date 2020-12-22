import React from "react";
import Buttons from "../../Buttons";
import { Link } from 'react-router-dom'
import * as ROUTES from '../../../../constants/routes';
import { connect } from 'react-redux'

const MainButtons = (props) => {
    return (
        <>

            {props.auth.isEmpty
                ?
                <Link to={ROUTES.SIGN_IN}><Buttons text1={'oddaj'} text2={'rzeczy'} buttonSize={"btn__big"}/></Link>
                :
                <Link to={ROUTES.FORM_MAIN}><Buttons text1={'oddaj'} text2={'rzeczy'} buttonSize={"btn__big"}/></Link>
            }
            <Link to={ROUTES.SIGN_IN}><Buttons text1={'zorganizuj'} text2={'zbiórkę'} buttonSize={"btn__big"}/></Link>
        </>
    );

};

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(MainButtons)