import React, { useState } from 'react';
import { connect } from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'

import { fetchBudgets } from '../redux/actions/budgetsActions'
import BudgetForm from './BudgetForm';
import MyButton from './UI/button/MyButton';
import MyModal from './UI/MyModal/MyModal';


const BudgetsContainer = () => {

    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    dispatch(fetchBudgets())
    
    return (
        <div className='App'>
            <MyButton onClick={() => setModal(true)}>
                Create Budget
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <BudgetForm setVisible={setModal}/>
            </MyModal>
        </div>
    );
};

export default BudgetsContainer;
