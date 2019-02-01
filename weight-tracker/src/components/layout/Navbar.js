import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__container container">
                <Link to='/' className="nav__logo">Weight Tracker</Link>
                <div className="nav__main">
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;