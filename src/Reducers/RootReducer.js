import {combineReducers} from "redux";

import headerReducer from "./HeaderReducer";

import { message, gregGo } from './LogInReducer'

// import smaller reducers here

const RootReducer = combineReducers({
    header: headerReducer,
    msg: message,
    loggedIn: gregGo
})

export default RootReducer;