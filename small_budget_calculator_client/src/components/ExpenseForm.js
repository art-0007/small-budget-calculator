import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const ExpenseForm = (props) => {
    const [expense, setExpense] = useState({
        name: '',
        amount: 0,
        budget_id: ''
    })

    const handleChange = event => {
        event.persist()
        setExpense(prev => ({...prev, ...{
          [event.target.name]: event.target.value
        }}))
      } 

      const addNewExpense = (e) => {
        e.preventDefault()
        
        const newExpense = {
            ...expense, budget_id: props.budgetId
        }
        props.create(newExpense)
        setExpense({name: '', amount: 0})
      }

    return (
        <div>
            <form >
                {/* {this.props.alert && <Alert text={this.props.alert} />} */}
                <MyInput type='text' value={expense.name} onChange={handleChange}  name="name" placeholder='Name'/>
                <MyInput type='text' value={expense.amount} onChange={handleChange}  name="amount" placeholder='Amount'/>
                
                <MyButton onClick={addNewExpense}>Create Budget</MyButton>   
            </form>
        </div>
    );
};

export default ExpenseForm;