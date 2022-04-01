import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import { connect } from 'react-redux' 
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {removeBudget} from '../redux/actions/budgetsActions'
import MyModal from './UI/MyModal/MyModal';
import BudgetEditForm from './BudgetEditForm';
import { editBudget } from '../redux/actions/budgetsActions';



const BudgetItem = (props) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const router = useHistory()

  const handleEdit = (budget) => {
      dispatch(editBudget(budget))
      setModal(false)
  }
    
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
              <MyButton onClick={() => setModal(true)}>
                Edit
              </MyButton>
              <MyModal visible={modal} setVisible={setModal}>
                <BudgetEditForm  edit={handleEdit} budget={props.budget}/>
              </MyModal>
              <MyButton onClick={() => props.delete(props.budget.id)}>
                Delete
              </MyButton>
          </div>
        </div>      
    );
};


export default connect(null, {removeBudget})(BudgetItem);