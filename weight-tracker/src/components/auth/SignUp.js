import React, { Component } from 'react';

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
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
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
                        <button className="btn btn--login">Sign up</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignUp;