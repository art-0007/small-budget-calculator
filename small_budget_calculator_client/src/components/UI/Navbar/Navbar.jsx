import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = () => {
    

    return (
            <div className="navbar">
                <div className="navbar__links">
                <NavLink to="/" className="btn btn-secondary">Home</NavLink>
                <NavLink to="/about" className="btn btn-secondary">About</NavLink>
                <NavLink to="/budgets" className="btn btn-secondary">Budgets</NavLink>
                </div>
            </div>
    );
};

export default Navbar;