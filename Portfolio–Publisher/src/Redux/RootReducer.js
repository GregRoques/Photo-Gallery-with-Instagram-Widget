import {combineReducers} from "redux";

import headerReducer from "./Reducers/HeaderReducer";
import photoArrayReducer from './PhotoArrayReducer'
import authReducer from './Reducers/Auth'


// import smaller reducers here

const RootReducer = combineReducers({
    header: headerReducer,
    auth: authReducer,
    reduxPhoto: photoArrayReducer
})

export default RootReducer;