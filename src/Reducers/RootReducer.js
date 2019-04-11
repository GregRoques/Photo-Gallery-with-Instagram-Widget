import {combineReducers} from "redux";

import headerReducer from "./HeaderReducer";

// import smaller reducers here

const RootReducer = combineReducers({
    header: headerReducer,
})

export default RootReducer;