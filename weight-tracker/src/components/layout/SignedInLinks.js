import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
    return (
        <ul className="nav__list">
            <li className="nav__item"><NavLink className="nav__link" to='/history'>History</NavLink></li>
            <li className="nav__item"><a href='/signin' onClick={props.signOut} className="nav__link">Log Out</a></li>
            <li className="nav__item"><NavLink className="nav__link" to='/'>AR</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);