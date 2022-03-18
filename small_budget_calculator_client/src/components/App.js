import React from 'react';
import BudgetsContainer from '../pages/BudgetsContainer';
import Router from './Router';
import Navbar from './UI/Navbar/Navbar'
import '../styles/App.css'


const App = () => {
    return (
        <div className='App'>
            <Navbar/>
            {/* <BudgetsContainer/> */}
            <Router/>
        </div>
    );
};

export default App;
