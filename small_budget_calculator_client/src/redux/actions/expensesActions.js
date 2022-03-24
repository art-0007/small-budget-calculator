import { ADD_EXPENSE, DELETE_EXPENSE, FETCH_EXPENSES } from "../types";

export const getExpenses = () => {
    return dispatch => {
        fetch(`http://127.0.0.1:3000/expenses`)
        .then(resp => resp.json())
        .then(expenses => dispatch({ type: FETCH_EXPENSES, payload: expenses }))
    }
}


export const removeExpense = id => {
    return dispatch => {
        fetch(`http://127.0.0.1:3000/expenses/` + id , {method: 'DELETE'})
        dispatch({ type: DELETE_EXPENSE, payload: id })
    }
}

export const addExpense = expense => {
    return dispatch => {
        
fetch('http://127.0.0.1:3000/expenses', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: { 'Content-type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(expense => dispatch({ type: ADD_EXPENSE, payload: expense }))

    }
}

