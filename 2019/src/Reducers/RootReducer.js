import { combineReducers } from "redux";

import headerReducer from "./HeaderReducer";
import authReducer from "./Auth";

// import smaller reducers here

const RootReducer = combineReducers({
  header: headerReducer,
  auth: authReducer,
});

export default RootReducer;
