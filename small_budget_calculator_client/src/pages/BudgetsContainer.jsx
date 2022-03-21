import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

import { fetchBudgets } from '../redux/actions/budgetsActions';
import { getExpenses } from '../redux/actions/expensesActions';
import BudgetForm from '../components/BudgetForm';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import BudgetsList from '../components/BudgetsList';


const BudgetsContainer = () => {

    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    dispatch(fetchBudgets())
    dispatch(getExpenses())
    
    return (
        <div className='App'>
            
            <MyButton onClick={() => setModal(true)}>
                Create Budget
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <BudgetForm setVisible={setModal}/>
            </MyModal>
            <BudgetsList/>
        </div>
    );
};

export default BudgetsContainer;
