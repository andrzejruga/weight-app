import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className="container container--main">
                <form onSubmit={this.handleSubmit} className="form">
                    <h4 className="form__title">Sign In</h4>
                    <div className="form__input-field form__input-field--sign-in-up">
                        <label htmlFor="email" className="form__input-label">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} className="form__input"/>
                    </div>
                    <div className="form__input-field form__input-field--sign-in-up">
                        <label htmlFor="password" className="form__input-label">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} className="form__input"/>
                    </div>
                    <div className="form__input-field form__input-field--sign-in-up">
                        <button className="btn btn--login">Login</button>
                    </div>
                    <div className="form__error-field">
                        { authError ? <p>{authError}</p> : null }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);