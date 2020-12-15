import authReducer from "./authReducer";
import giveAwayFormReducer from "./giveAwayFormReducer";
import {combineReducers} from "redux";
import charityReducer from "./charityReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    form: giveAwayFormReducer,
    charity: charityReducer,
})

export default rootReducer;