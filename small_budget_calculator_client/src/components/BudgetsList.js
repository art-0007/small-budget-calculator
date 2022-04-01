import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux'
import BudgetItem from './BudgetItem';
import { removeBudget } from '../redux/actions/budgetsActions'
import {TransitionGroup, CSSTransition} from "react-transition-group";
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import ExpansesList from './ExpansesList';


const BudgetsList = (props) => {

    const [searchBudget, setSearchBudget] = useState('')

    const searchedBudget = useMemo(() => {
        return props.budgets.filter(budget => budget.name.toLowerCase().includes(searchBudget))   
    }, [searchBudget, props.budgets])
    
    const renderBudget = () => {
        return searchedBudget.map((budget, idx) =>
        <CSSTransition
                    key={budget.id}
                    timeout={500}
                    classNames="budget"
                    >
            <BudgetItem 
            delete={props.removeBudget} 
            number={idx + 1}  
            budget={budget}/>
        </CSSTransition>
        )
    }

        return (
            <div className='App'>
            <MyInput 
            value={searchBudget}
            onChange = {e => setSearchBudget(e.target.value)}
            placeholder='Search...' 
            />
            <h1 style={{textAlign: 'center'}}>Budgets List</h1>
            <TransitionGroup>
                {/* {this.props.budgets.length
                    ? this.renderBudget()
                    : <h4 style={{textAlign: 'center'}}>-- Budgets not found --</h4>
                } */}
                {renderBudget()}
            </TransitionGroup>
            
        </div>
        );
}

const mapStateToProps = state => {
    return { budgets: state.budgets }
}

const mapDispatchToProps = dispatch => {
  return { removeBudget: (id) => dispatch(removeBudget(id))};
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsList);