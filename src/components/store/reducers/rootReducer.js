import authReducer from "./authReducer";
import giveAwayFormReducer from "./giveAwayFormReducer";
import {combineReducers} from "redux";
import charityReducer from "./charityReducer";
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    form: giveAwayFormReducer,
    charity: charityReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;