import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import {getBudget} from '../redux/actions/budgetsActions'
import { addExpense } from '../redux/actions/expensesActions';
import Loader from '../components/UI/Loader/Loader';
import Expense from '../components/Expense';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import ExpenseForm from '../components/ExpenseForm';


const BudgetPage = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const [budget, setBudget] = useState({});
    const [expenses, setExpenses] = useState([]);
    const [modal, setModal] = useState(false)

    const [fetchBudget, loading, error] = useFetch(async (id) => {
        const budget = await getBudget(id)
        setBudget(budget);
        setExpenses(budget.expenses)
    })

    useEffect(() => {
        fetchBudget(params.id)
    }, [])

    const totalExpenses = () => {
        return Object.values(expenses).reduce((total, value) => total + value.amount, 0)
      }

    const createExpense = (newExpense) => { 
        dispatch(addExpense(newExpense))
        fetchBudget(params.id)
        setModal(false)
    }

    const renderExpenses = () => {
        return expenses.map((expense, idx) => 
        <Expense 
        number={idx+1} 
        key={expense.id} 
        expense={expense}
        fetchBudget={() =>fetchBudget(params.id)}
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
                        <MyButton onClick={() => setModal(true)}>
                        Add Expense
                        </MyButton>
                            <MyModal visible={modal} setVisible={setModal}>
                                <ExpenseForm create={createExpense} budgetId={params.id} setVisible={setModal}/>
                            </MyModal>                  
                </div>
            }   
        </div>
    );
};

export default BudgetPage;