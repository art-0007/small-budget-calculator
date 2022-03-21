import { ADD_EXPENSE, DELETE_EXPENSE } from "../types";
import axios from "axios";

// export async function addExpense(expense) {
//     const response = await axios.post(`http://127.0.0.1:3000/expenses`, expense )
//     return dispatch({ type: ADD_EXPENSE, payload: response.data })
// }

// export async function removeExpense(id) {
//     const response = await axios.delete(`http://127.0.0.1:3000/expenses/` + id )
//     dispatch({ type: DELETE_EXPENSE, payload: id })
// }

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

