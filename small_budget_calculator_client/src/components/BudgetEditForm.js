import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import { Alert } from './Alert';

const BudgetEditForm = (props) => {
    
    const [budget, setBudget] = useState({
        name: props.budget.name,
        description: props.budget.description,
        id: props.budget.id
    })

   const handleChange = event => {
        event.persist()
        setBudget(prev => ({...prev, ...{
          [event.target.name]: event.target.value
        }}))
      }

    const handleSubmit = (e) => { 
        e.preventDefault()
        debugger;
        props.edit(budget)
        setBudget({name: '', description: '', id: 0})

    }


    return (
            <form >
                {/* {this.props.alert && <Alert text={this.props.alert} />} */}
                <MyInput type='text' value={budget.name} onChange={handleChange} name="name" placeholder={props.budget.name}/>
                <MyInput type='text' value={budget.description} onChange={handleChange} name="description" placeholder={props.budget.description}/>
                
                <MyButton onClick={handleSubmit}>Edit Budget</MyButton>   
            </form>
    );
};

export default BudgetEditForm;