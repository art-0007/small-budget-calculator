export const budgetsReducer = (state = [], action) => {

    switch(action.type){
        case 'FETCH_BUDGETS':
            return action.payload
        case 'ADD_BUDGET':
            return [...state, action.payload]
        default:
            return state

    }
};
