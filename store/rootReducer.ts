import { combineReducers } from "redux";
import { UserReducer } from "./BasicReducer/BasicReducer";


const rootReducer = combineReducers({
    user: UserReducer,
});  


export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;