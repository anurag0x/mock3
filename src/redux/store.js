import {  applyMiddleware, combineReducers, createStore, legacy_createStore } from "redux";

import thunk from "redux-thunk"
import {reducer as todoreducer} from "./reducer"
const rootreducer=combineReducers({
    todoreducer  
})
 export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))

