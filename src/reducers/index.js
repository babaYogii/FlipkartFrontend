import authReducer from "./auth.reducer";
import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import ordersReducer from "./orders.reducer";
import productReducer from "./product.reducer";
import categoryReducer from './category.reducer';


const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
    order:ordersReducer,
    product:productReducer,
    category:categoryReducer
})

export default rootReducer;