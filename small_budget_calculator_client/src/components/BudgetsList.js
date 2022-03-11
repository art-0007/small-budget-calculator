import React from 'react';
import { connect } from 'react-redux'
import BudgetItem from './BudgetItem';
// import {TransitionGroup, CSSTransition} from "react-transition-group";

const BudgetsList = ({budgets}) => {
    console.log(budgets)
    return (
        <div className='App'>
            <h1 style={{textAlign: 'center'}}>Budgets List</h1>
            {budgets.map(budget =>  <BudgetItem  key={budget.id} budget={budget}/>)}   
        </div>
    );
};

const mapStateToProps = state => {
    return { budgets: state.budgets }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       delete: (budgetName) => dispatch({ type: "DELETE_BUDGET", payload: budgetName }),
//     };
//   };

export default connect(mapStateToProps)(BudgetsList);