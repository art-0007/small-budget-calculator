import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = () => {
    

    return (
            <div className={classes.navbar}>
                <div className={classes.navbar__links}>
                <NavLink to="/" className="btn btn-secondary btn-sm me-md-2">Home</NavLink>
                <NavLink to="/about" className="btn btn-secondary btn-sm me-md-2">About</NavLink>
                <NavLink to="/budgets" className="btn btn-secondary btn-sm">Budgets</NavLink>
                </div>
            </div>
    );
};

export default Navbar;