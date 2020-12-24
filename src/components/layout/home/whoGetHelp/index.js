import React, { useState } from "react";
import {ReactComponent as Decoration} from '../../../../assets/Decoration.svg'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import * as ROUTES from "../../../../constants/routes";
import { connect } from 'react-redux'
import Foundations from "./Foundations";
import Organizations from "./Organizations";

import WhoGetHelpBtns from "./WhoGetHelpBtns";
import LocalCharity from "./Local";


const WhoGetHelp = (props) => {

    const [isActive, setIsActiv] = useState(true)
    return (
        <Router>
            <div className="who-get-help__wrapper" id={'whoGetHelp'}>
                <h2 className="who-get-help__title">Komu pomagamy?</h2>
                <Decoration className="who-get-help__decoration"/>
                <WhoGetHelpBtns/>


                <Switch>
                    <Route exact path={ROUTES.HOME} render={() => isActive && <Redirect to={ROUTES.FOUNDATIONS}/>}/>
                    <Route path={ROUTES.FOUNDATIONS} render={() => <Foundations charities={props}/>}/>
                    <Route path={ROUTES.ORGANIZATIONS} render={() => <Organizations charities={props}/>}/>
                    <Route path={ROUTES.LOCALS} render={() => <LocalCharity charities={props}/>}/>


                </Switch>
            </div>
        </Router>
    )
}
const mapStateToProps = (state) => ({
    charities: state.charity.charityList
})

export default connect(mapStateToProps)(WhoGetHelp)