import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import BudgetService from '../API/BudgetService';
import {getBudget} from '../redux/actions/budgetsActions'
import Loader from '../components/UI/Loader/Loader';

const BudgetPage = () => {
    const params = useParams()
    const [budget, setBudget] = useState({});

    const [fetchBudget, loading, error] = useFetch(async (id) => {
        const response = await getBudget(id)
        setBudget(response.data);
    })

    useEffect(() => {
        fetchBudget(params.id)
    }, [])

    
    return (
        <div>
            {loading
                ? <Loader/>
                :  <div>{budget.name}. {budget.description}</div>
            }
           
        </div>
    );
};

export default BudgetPage;