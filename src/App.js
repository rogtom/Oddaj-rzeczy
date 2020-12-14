import React from "react";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import * as ROUTES from './constants/routes';
import Home from "./components/layout/home/Home";
import Header from "./components/layout/Header";
import SignIn from "./components/layout/SignIn";
import SignUp from "./components/layout/SignUp";
import SignOut from "./components/layout/SignOut";
import Footer from "./components/layout/home/Footer";


const App = () => {
    return (
        <Router>

            <Header/>

            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/>
                <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                <Route path={ROUTES.SIGN_UP} component={SignUp}/>
                <Route path={ROUTES.SIGN_OUT} component={SignOut}/>
            </Switch>

        </Router>
    )
}

export default App;