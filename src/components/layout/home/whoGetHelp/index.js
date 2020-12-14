import React, { useState, useEffect } from "react";
import {ReactComponent as Decoration} from '../../../../assets/Decoration.svg'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import * as ROUTES from "../../../../constants/routes";
import Foundations from "./Foundations";
import Organizations from "./Organizations";
import Locals from "./Local";
import WhoGetHelpBtns from "./WhoGetHelpBtns";


const WhoGetHelp = () => {
    return (
        <Router>
            <div className="who-get-help__wrapper" id={'whoGetHelp'}>
                <h2 className="who-get-help__title">Komu pomagamy?</h2>
                <Decoration className="who-get-help__decoration"/>
                <WhoGetHelpBtns/>


                <Switch>
                    <Route exact={true} path={ROUTES.FOUNDATIONS} component={Foundations}/>
                    <Route path={ROUTES.ORGANIZATIONS} component={Organizations}/>
                    <Route path={ROUTES.LOCALS} component={Locals}/>
                </Switch>

            </div>
        </Router>
    )
}
export default WhoGetHelp