import React from 'react';
import {useDispatch} from 'react-redux'
import MyButton from './UI/button/MyButton';
import { removeExpense } from '../redux/actions/expensesActions';

const Expense = (props) => {
    console.log(props)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(removeExpense(props.expense.id))
        props.fetchBudget()
    }

    return (
            <tr>
                <th scope="row">{props.number}</th>
                <td>{props.expense.name}</td>
                <td>{props.expense.amount}
                <MyButton 
                    style={{float: 'right'}}
                    onClick={handleClick}
                >Delete</MyButton>
                </td>   
            </tr> 
            
    );
};

export default Expense;