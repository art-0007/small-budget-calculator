import React, { Component } from 'react';
import { connect } from 'react-redux'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput';

import {addBudget} from '../actions/budgetsActions'

class BudgetForm extends Component {

    state = {
        name: '',
        description: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addBudget(this.state)
        this.setState({
            name: '',
            description: ''
        })
    }

    render() {
        return (
            <form >
                <MyInput type='text' value={this.state.name} onChange={this.handleChange} name="name" placeholder='Name'/>
                <MyInput type='text' value={this.state.description} onChange={this.handleChange} name="description" placeholder='Description'/>
                
                <MyButton onClick={this.handleSubmit}>Create Budget</MyButton>   
            </form>
        );
    }
}

export default connect(null, {addBudget})(BudgetForm);