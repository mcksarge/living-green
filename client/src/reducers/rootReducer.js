import { combineReducers } from "redux";
import { userReducer } from "react";

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer;