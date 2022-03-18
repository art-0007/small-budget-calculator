import React from 'react';
import {useParams} from 'react-router-dom'

const BudgetPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            Hello
        </div>
    );
};

export default BudgetPage;