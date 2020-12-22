import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss'
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from "./components/store/reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import {getFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import firebase from './constants/fbConfig'
import {createFirestoreInstance} from 'redux-firestore';
import {useSelector} from 'react-redux'
import {isLoaded} from 'react-redux-firebase'


const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady: true

}


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk.withExtraArgument({getFirebase, getFirestore})
    ),
);
const store = createStore(rootReducer, enhancer);

function AuthIsLoaded({children}) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>splash screen...</div>;
    return children
}


ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider
            firebase={firebase}
            config={rrfConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}>
            <AuthIsLoaded>
                <App/>
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

