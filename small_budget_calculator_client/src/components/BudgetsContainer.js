import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux'

import { fetchBudgets } from '../redux/actions/budgetsActions'

import BudgetForm from './BudgetForm';


class BudgetsContainer extends Component {

    componentDidMount() {
        this.props.fetchBudgets()
    }

    render() {
        return (
            <div>
                <BudgetForm/>
            </div>
        );
    }
}


export default connect(null, {fetchBudgets})(BudgetsContainer);