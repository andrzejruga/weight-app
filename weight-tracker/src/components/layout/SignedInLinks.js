import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="nav__list">
            <li className="nav__item"><NavLink className="nav__link" to='/history'>History</NavLink></li>
            <li className="nav__item"><NavLink className="nav__link" to='/'>Log Out</NavLink></li>
            <li className="nav__item"><NavLink className="nav__link" to='/'>AR</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;