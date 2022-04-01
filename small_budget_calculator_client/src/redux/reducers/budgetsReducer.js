import { FETCH_BUDGETS, ADD_BUDGET, DELETE_BUDGET, EDIT_BUDGET } from "../types"

export const budgetsReducer = (state = [], action) => {
   debugger;
    switch(action.type){
        case FETCH_BUDGETS:
            return action.payload
        case ADD_BUDGET:
            return [...state, action.payload]
        case DELETE_BUDGET:
            return state.filter(element => element.id !== action.payload)
        case EDIT_BUDGET:
            return [
                ...state.filter(budget => budget.id !== action.payload.id),
                Object.assign({}, action.payload)
              ]
        default:
            return state

    }
};
