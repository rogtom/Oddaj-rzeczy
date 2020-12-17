import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss'
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from "./components/store/reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';

import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from './constants/fbConfig'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'


const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true

}


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk.withExtraArgument({getFirebase, getFirestore})
    ),

);
const store = createStore(rootReducer, enhancer);


ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider
            firebase={firebase}
            config={rrfConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

