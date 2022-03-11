import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchBudgets } from '../actions/budgetsActions'


class BudgetsContainer extends Component {

    componentDidMount() {
        this.props.fetchBudgets()
    }

    render() {
        return (
            <div>
                Budgets Container
                
            </div>
        );
    }
}

export default connect(null, { fetchBudgets })(BudgetsContainer);