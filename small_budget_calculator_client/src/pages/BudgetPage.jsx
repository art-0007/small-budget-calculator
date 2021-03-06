import React, { useEffect, useMemo, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import {getBudget} from '../redux/actions/budgetsActions'
import { addExpense, fetchExpenses } from '../redux/actions/expensesActions';
import Loader from '../components/UI/Loader/Loader';
import Expense from '../components/Expense';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import ExpenseForm from '../components/ExpenseForm';
import MySelect from '../components/UI/MySelect/MySelect';


const BudgetPage = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const myStore = useSelector( state => state)
    const [budget, setBudget] = useState({});
    const [modal, setModal] = useState(false)
    const [sortSelect, setSortSelect] = useState('')
    const [sortedExpenses, setSortedExpenses] = useState([])

        
    const [fetchBudget, loading, error] = useFetch(async (id) => {
        const budget = await getBudget(id)
        setBudget(budget);
    })

    const getExpensesByBudgetId = useMemo(() => {
         return  myStore.expenses.filter(expense => expense.budget_id == params.id)
    }, [myStore.expenses, sortSelect])

    
    useEffect(() => {   
        fetchBudget(params.id)    
    }, [])

    const totalExpenses = () => {
        return Object.values(getExpensesByBudgetId).reduce((total, value) => total + value.amount, 0)
      }

    const createExpense = (newExpense) => { 
        dispatch(addExpense(newExpense))
        setModal(false)
    }

    const renderExpenses = () => {
        let renderingExpenses
        sortSelect 
        ? 
        renderingExpenses = sortedExpenses
        : 
        renderingExpenses = getExpensesByBudgetId
        
        return renderingExpenses.map((expense, idx) => 
        <Expense 
        number={idx+1} 
        key={expense.id} 
        expense={expense}
        />)
    }

    const sortExpenses = (sort) => {
        setSortSelect(sort)
        setSortedExpenses([...getExpensesByBudgetId].sort((a, b) => (a[sort] > b[sort]) ? 1 : -1));
    }
       
    return (
        <div>
            {loading
                ? <Loader/>
                :  <div>
                    <h3 className="fst-italic">{budget.name}</h3>
                    <p className="fst-italic">{budget.description}</p> 
                    <hr style={{margin: '15px 0'}}/>
                    <div>
                    <MySelect
                        defaultValue='Sort by...'
                        value = {sortSelect}
                        onChange={sortExpenses}
                        options= {[
                            {value: 'name', name: 'Sort by name'},
                            {value: 'amount', name: 'Sort by amount'}
                        ]}

                    />
                    </div>
                    <hr style={{margin: '15px 0'}}/>

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
                                <ExpenseForm create={createExpense} budgetId={params.id} />
                            </MyModal>                  
                </div>
            }   
        </div>
    );
};

export default BudgetPage;