import {combineReducers} from "redux";

import headerReducer from "./HeaderReducer";

import gregGo from './LogInReducer'

// import smaller reducers here

const RootReducer = combineReducers({
    header: headerReducer,
    loggedIn: gregGo
})

export default RootReducer;