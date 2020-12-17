import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss'
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./components/store/reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './constants/fbConfig'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| reduxFirestore(fbConfig)||reactReduxFirebase(fbConfig) || compose;
const store = createStore(rootReducer, composeEnhancers(

    applyMiddleware(
        thunk.withExtraArgument({getFirebase, getFirestore}),
        composeEnhancers)
));
// const store = createStore(rootReducer,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//         reduxFirestore(fbConfig),
//         reactReduxFirebase(fbConfig),
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     )
// );


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

