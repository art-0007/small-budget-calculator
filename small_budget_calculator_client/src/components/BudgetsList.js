import React, { Component } from 'react';
import { connect } from 'react-redux'
import BudgetItem from './BudgetItem';
import { removeBudget } from '../redux/actions/budgetsActions'
// import {TransitionGroup, CSSTransition} from "react-transition-group";


class BudgetsList extends Component {
    render() {
        return (
            <div className='App'>
            <h1 style={{textAlign: 'center'}}>Budgets List</h1>
            {this.props.budgets.map(budget =>  <BudgetItem delete={this.props.removeBudget} key={budget.id} budget={budget}/>)}   
        </div>
        );
    }
}

const mapStateToProps = state => {
    return { budgets: state.budgets }
}

const mapDispatchToProps = dispatch => {
  return { removeBudget: (id) => dispatch(removeBudget(id)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsList);