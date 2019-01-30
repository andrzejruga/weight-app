import React, { Component } from 'react';

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
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="form">
                    <h4 className="form__title">Sign In</h4>
                    <div className="form__input-field">
                        <label htmlFor="email" className="form__input-label">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} className="form__input"/>
                    </div>
                    <div className="form__input-field">
                        <label htmlFor="password" className="form__input-label">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} className="form__input"/>
                    </div>
                    <div className="form__input-field">
                        <button className="btn btn--login">Login</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;