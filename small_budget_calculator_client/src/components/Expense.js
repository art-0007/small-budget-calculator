import React from 'react';

const Expense = (props) => {


    return (
            <tr>
                <th scope="row">{props.number}</th>
                <td>{props.expense.name}</td>
                <td>{props.expense.amount}</td>
            </tr> 
            
    );
};

export default Expense;