import React, { Component } from 'react';
import { connect } from 'react-redux'
import BudgetItem from './BudgetItem';
import { removeBudget } from '../redux/actions/budgetsActions'
import {TransitionGroup, CSSTransition} from "react-transition-group";



class BudgetsList extends Component {

    renderBudget = () => {
        return this.props.budgets.map((budget, idx) =>
        <CSSTransition
                    key={budget.id}
                    timeout={500}
                    classNames="budget"
                    >
            <BudgetItem 
            delete={this.props.removeBudget} 
            number={idx + 1}  
            budget={budget}/>
        </CSSTransition>
        )
    }

    render() {
        return (
            <div className='App'>
            <h1 style={{textAlign: 'center'}}>Budgets List</h1>
            <TransitionGroup>
                {/* {this.props.budgets.length
                    ? this.renderBudget()
                    : <h4 style={{textAlign: 'center'}}>-- Budgets not found --</h4>
                } */}
                {this.renderBudget()}
            </TransitionGroup>
            
               
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