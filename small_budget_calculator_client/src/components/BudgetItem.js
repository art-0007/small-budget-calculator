import React from 'react';
import MyButton from './UI/button/MyButton';
import { connect } from 'react-redux' 

import {removeBudget} from '../redux/actions/budgetsActions'



const BudgetItem = (props) => {
    
    return (
        <div className="budget">
          <div className="budget__content">
            <strong>{props.number}. {props.budget.name}</strong>
            <div>
            {props.budget.description}
            </div>
          </div> 
                
          <div className="budget__bttns">
              <MyButton onClick={() => props.delete(props.budget.id)}>
                Delete
              </MyButton>
          </div>
        </div>      
    );
};


export default connect(null, {removeBudget})(BudgetItem);