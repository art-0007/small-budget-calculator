import { FETCH_BUDGETS, ADD_BUDGET, DELETE_BUDGET } from "../types"
export const fetchBudgets = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/budgets')
        .then(resp => resp.json())
        .then(budgets => dispatch({ type: FETCH_BUDGETS, payload: budgets }))
        
    }
}

export const addBudget = budget => {

    return dispatch => {
        
        fetch('http://127.0.0.1:3000/budgets', {
            method: 'POST',
            body: JSON.stringify(budget),
            headers: { 'Content-type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(budget => dispatch({ type: ADD_BUDGET, payload: budget }))

    }

}

export function removeBudget(budgetId) {
    return async dispatch => {
        const response = await fetch(`http://127.0.0.1:3000/budgets/${budgetId}`, 
        {method: 'DELETE'})
        dispatch({type: DELETE_BUDGET, payload: budgetId })
    }
}