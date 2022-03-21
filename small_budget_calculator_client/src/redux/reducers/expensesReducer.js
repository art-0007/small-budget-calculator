import { ADD_EXPENSE, DELETE_EXPENSE, FETCH_EXPENSES } from "../types"

export const expensesReducer = (state = [], action) => {
   
    switch(action.type){
        case FETCH_EXPENSES:
            return action.payload
        case ADD_EXPENSE:
            return [...state, action.payload]
        case DELETE_EXPENSE:
            return state.filter(element => element.id !== action.payload)
        default:
            return state

    }
};