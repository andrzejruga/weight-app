import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="nav__list">
            <li className="nav__item"><NavLink to='/history'>History</NavLink></li>
            <li className="nav__item"><NavLink to='/'>Log Out</NavLink></li>
            <li className="nav__item"><NavLink to='/'>AR</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;