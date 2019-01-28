import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="nav__list">
            <li className="nav__item"><NavLink to='/'>History</NavLink></li>
            <li className="nav__item"><NavLink to='/'>Log Out</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;