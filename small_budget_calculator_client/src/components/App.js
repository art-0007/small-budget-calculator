import React from 'react';
import Router from './Router';
import Navbar from './UI/Navbar/Navbar'
import '../styles/App.css'


const App = () => {
    return (
        <div className='App'>
            <Navbar/>
            <Router/>
        </div>
    );
};

export default App;
