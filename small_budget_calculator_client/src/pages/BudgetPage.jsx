import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import BudgetService from '../API/BudgetService';
import {getBudget} from '../redux/actions/budgetsActions'
import Loader from '../components/UI/Loader/Loader';
import Expense from '../components/Expense';

const BudgetPage = () => {
    const params = useParams()
    const [budget, setBudget] = useState({});
    const [expenses, setExpenses] = useState([]);

    const [fetchBudget, loading, error] = useFetch(async (id) => {
        const response = await getBudget(id)
        setBudget(response.data);
        setExpenses(response.data.expenses)
    })

    useEffect(() => {
        fetchBudget(params.id)
    }, [])

    const totalExpenses = () => {
        return Object.values(expenses).reduce((total, value) => total + value.amount, 0)
      }

    const renderExpenses = () => {
        return expenses.map((expense, idx) => 
        <Expense 
        number={idx+1} 
        key={expense.id} 
        expense={expense}
        expenses={expenses}
        />)
    }
         
    return (
        <div>
            {loading
                ? <Loader/>
                :  <div>
                    <h3 className="fst-italic">{budget.name}</h3>
                    <p className="fst-italic">{budget.description}</p> 

                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderExpenses()}
                        </tbody>
                        </table>  
                        <h3 style={{right: "50px"}}>Total amount: ${totalExpenses()}.00</h3>                  
                </div>
            }   
        </div>
    );
};

export default BudgetPage;