import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home'
import BudgetsContainer from '../pages/BudgetsContainer';
import About from '../pages/About'
import error from '../pages/error';
import BudgetPage from '../pages/BudgetPage';
import { routes } from '../router/index'

const Router = () => {
    return (
            <Switch>
                {routes.map(route => 
                   <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                   />
                )}
                {/* <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route exact path='/budgets' component={BudgetsContainer} />
                <Route exact path='/budgets/:id' component={BudgetPage} />
                <Route path='/error' component={error} /> */}
                <Redirect to='/error' />
            </Switch>            
    );
};

export default Router;