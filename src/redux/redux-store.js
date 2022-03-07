import {combineReducers, createStore} from "redux";
import dataReducer from "./data-reducer";

let reducers = combineReducers({
    mainPage: dataReducer
});

let store = createStore(reducers);

export default store;