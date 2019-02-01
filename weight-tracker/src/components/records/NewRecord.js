import React, { Component } from 'react';

class NewRecord extends Component {
    state = {
        oneWeight: '',
        twoWeight: '',
        date: ''
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
            <div className="form">
                <form onSubmit={this.handleSubmit} className="form__main">
                    <h4 className="form__title">Enter your weight</h4>
                    <div className="form__input-field">
                        <label htmlFor="oneWeight" className="form__input-label">Monka's Weight</label>
                        <input type="number" step="0.1" placeholder="00.0" id="oneWeight" onChange={this.handleChange} className="form__input"/>
                    </div>
                    <div className="form__input-field">
                        <label htmlFor="date" className="form__input-label">Date</label>
                        <input type="date" id="date" onChange={this.handleChange} className="form__input" required/>
                    </div>
                    <div className="form__input-field">
                        <label htmlFor="twoWeight" className="form__input-label">Andy's Weight</label>
                        <input type="number" step="0.1" placeholder="00.0" id="twoWeight" onChange={this.handleChange} className="form__input"/>
                    </div>
                    <div className="form__input-field">
                        <button className="btn btn--save">Save</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default NewRecord;