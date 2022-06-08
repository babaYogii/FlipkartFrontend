import authReducer from "./auth.reducer";
import { combineReducers } from "redux";
import userReducer from "./user.reducer";


const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer
})

export default rootReducer;