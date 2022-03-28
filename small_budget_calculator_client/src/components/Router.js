import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/index'

const Router = () => {
    const isAuth = true;


    return (
        isAuth
            ?
            <Switch>
            {privateRoutes.map(route => 
                <Route
                     component={route.component}
                     path={route.path}
                     exact={route.exact}
                     key={route.path}
                />
            )}
            <Redirect to='/error' />
            </Switch>
            :
            <Switch>
            {publicRoutes.map(route => 
                   <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                   />
            )};
    
                <Redirect to='/login' />
            </Switch>            
    );
};

export default Router;