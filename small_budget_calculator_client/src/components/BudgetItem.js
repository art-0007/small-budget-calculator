import React from 'react';
import MyButton from './UI/button/MyButton';
import { connect } from 'react-redux' 
import {useHistory} from 'react-router-dom'
import {removeBudget} from '../redux/actions/budgetsActions'



const BudgetItem = (props) => {
  
  const router = useHistory()
   console.log(router) 
    return (
        <div className="budget">
          <div className="budget__content">
            <strong>{props.number}. {props.budget.name}</strong>
            <div>
            {props.budget.description}
            </div>
          </div> 
                
          <div className="budget__bttns">
              <MyButton onClick={() => router.push(`/budgets/${props.budget.id}`)}>
                Open
              </MyButton>
              <MyButton onClick={() => props.delete(props.budget.id)}>
                Delete
              </MyButton>
          </div>
        </div>      
    );
};


export default connect(null, {removeBudget})(BudgetItem);