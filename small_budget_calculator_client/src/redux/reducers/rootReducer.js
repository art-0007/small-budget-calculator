import { combineReducers } from "redux";

import { budgetsReducer } from "./budgetsReducer";
import { usersReducer } from "./usersReducer"
import { appReducer } from "./appReducer";
import { expensesReducer } from "./expensesReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    budgets: budgetsReducer,
    expenses: expensesReducer,
    app: appReducer
})