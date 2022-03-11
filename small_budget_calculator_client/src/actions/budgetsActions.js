// create an action that is going to fetch the grads from my api
export const fetchBudgets = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/budgets')
        .then(resp => resp.json())
        .then(budgets => dispatch({ type: 'FETCH_BUDGETS', payload: budgets }))
        
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
        .then(budget => dispatch({ type: 'ADD_BUDGET', payload: budget }))

    }

}