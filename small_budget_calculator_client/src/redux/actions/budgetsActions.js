import { ADD_BUDGET, DELETE_BUDGET, REQUEST_BUDGETS } from "../types"
import axios from "axios";

export function fetchBudgets() {
    return {
        type: REQUEST_BUDGETS
    }
}

export async function getBudget(budgetId) {
        const response = await axios.get(`http://127.0.0.1:3000/budgets/${budgetId}`)
        return response.data;
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
        console.log(response)
        dispatch({type: DELETE_BUDGET, payload: budgetId })
    }
}