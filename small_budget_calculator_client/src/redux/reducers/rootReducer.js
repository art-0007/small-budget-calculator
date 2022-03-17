import { combineReducers } from "redux";

import { budgetsReducer } from "./budgetsReducer";
import { usersReducer } from "./usersReducer"
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    budgets: budgetsReducer,
    app: appReducer
})