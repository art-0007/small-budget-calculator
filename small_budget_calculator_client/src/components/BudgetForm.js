import React, { Component } from 'react';
import { connect } from 'react-redux'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput';
import { addBudget } from '../redux/actions/budgetsActions';
import { showAlert } from '../redux/actions/appActions';
import { Alert } from './Alert';


class BudgetForm extends Component {

    state = {
        name: '',
        description: ''
    }

    handleChange = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
          [event.target.name]: event.target.value
        }}))
      }

    handleSubmit = e => {
        e.preventDefault()

        const {name, description} = this.state 

        if (!name.trim() || !description.trim()) {
            return this.props.showAlert('Post must have a text!')
          }
        // debugger;
        this.props.addBudget(this.state)
        this.setState({
            name: '',
            description: ''
        })
    }

    render() {
        return (
            <form >
                {this.props.alert && <Alert text={this.props.alert} />}
                <MyInput type='text' value={this.state.name} onChange={this.handleChange} name="name" placeholder='Name'/>
                <MyInput type='text' value={this.state.description} onChange={this.handleChange} name="description" placeholder='Description'/>
                
                <MyButton onClick={this.handleSubmit}>Create Budget</MyButton>   
            </form>
        );
    }
}

const mapDispatchToProps = {
    addBudget, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
  })

export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm);