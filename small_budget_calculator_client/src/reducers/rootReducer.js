import { combineReducers } from "redux";

import { budgetsReducer } from "./budgetsReducer";
import { usersReducer } from "./usersReducer"

export const rootReducer = combineReducers({
    users: usersReducer,
    budgets: budgetsReducer
})