import React from 'react';
import MyButton from './UI/button/MyButton';

const BudgetItem = (props) => {
    console.log(props)
    return (
        <div className="budget">
          <div className="budget__content">
            {/* <strong>{props.budget.id}. {props.budget.name}</strong>
            <div>
                {props.budget.description}
            </div> */}
            <strong>{props.budget.id}. {props.budget.name}</strong>
            <div>
            {props.budget.description}
            </div>
          </div> 
                
          <div className="budget__bttns">
              <MyButton>
                Delete
              </MyButton>
          </div>
        </div>      
    );
};

export default BudgetItem;