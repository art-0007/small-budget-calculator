import React from 'react';
import BudgetsContainer from './BudgetsContainer';
import Router from './Router';
import '../styles/App.css'


const App = () => {
    return (
        <div>
        
            <BudgetsContainer/>
            <Router/>
        </div>
    );
};

export default App;
