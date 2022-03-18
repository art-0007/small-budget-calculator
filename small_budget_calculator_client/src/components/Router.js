import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import BudgetsContainer from '../pages/BudgetsContainer';
import Budgets from '../pages/Budgets'
import About from '../pages/About'

const Router = () => {
    return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/budgets' component={BudgetsContainer} />
            </Switch>            
    );
};

export default Router;