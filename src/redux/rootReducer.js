import { combineReducers } from "redux";
import { operationsReducers } from "./todoapp/reducers/operations";

export const rootReducers = combineReducers({
    operationsReducers, 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
})