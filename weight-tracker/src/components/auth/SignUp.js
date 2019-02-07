import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className="container container--main">
                <form onSubmit={this.handleSubmit} className="form">
                    <h4 className="form__title">Sign Up</h4>
                    <div className="form__input-field">
                        <label htmlFor="email" className="form__input-label">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} className="form__input"/>
                    </div>
                    <div className="form__input-field">
                        <label htmlFor="password" className="form__input-label">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} className="form__input"/>
                    </div>
                    <div className="form__input-field">
                        <label htmlFor="firstName" className="form__input-label">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} className="form__input"/>
                    </div>
                    <div className="form__input-field">
                        <label htmlFor="lastName" className="form__input-label">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} className="form__input"/>
                    </div>
                    <div className="form__input-field">
                        <button className="btn btn--signup">Sign up</button>
                    </div>
                    <div className="form__error-field">
                        { authError ? <p>{ authError }</p> : null }
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);