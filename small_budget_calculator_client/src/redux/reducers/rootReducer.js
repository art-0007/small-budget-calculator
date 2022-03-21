import { combineReducers } from "redux";

import { budgetsReducer } from "./budgetsReducer";
import { appReducer } from "./appReducer";
import { expensesReducer } from "./expensesReducer";

export const rootReducer = combineReducers({
    budgets: budgetsReducer,
    expenses: expensesReducer,
    app: appReducer
})