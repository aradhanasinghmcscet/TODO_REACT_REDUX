// import {createStore} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
import { rootReducers } from "./rootReducer";

export const store = configureStore({
    reducer: rootReducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // can configure redux devtool
});