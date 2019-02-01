import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="nav__list">
            <li className="nav__item"><NavLink className="nav__link" to='/signup'>Signup</NavLink></li>
            <li className="nav__item"><NavLink className="nav__link" to='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;