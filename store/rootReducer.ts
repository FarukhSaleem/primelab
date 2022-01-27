import { combineReducers } from "redux";
import { UserReducer } from "./user/user.reducer";
import { AuthReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
    user: UserReducer,
    auth: AuthReducer,
});  


export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;