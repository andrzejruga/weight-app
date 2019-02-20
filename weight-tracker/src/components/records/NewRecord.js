import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecord } from '../../store/actions/recordActions';
import moment from 'moment';

class NewRecord extends Component {
    state = {
        weightOne: '',
        weightTwo: '',
        date: moment().format('YYYY-MM-D')
    }
    handleChange = (e) => {
        this.setState({
            // [e.target.id]: e.target.value
            [e.target.id]: (e.target.id === 'weightOne' || e.target.id === 'weightTwo') ?
                parseFloat(e.target.value).toFixed(1) :
                e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addRecord(this.state);
        this.setState({
            weightOne: '',
            weightTwo: ''
        })
    }
    render() {
        // let today = moment().format('YYYY-MM-D');
        // console.log(today);
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit} className="form__main">
                    <h4 className="form__title">Enter your weight</h4>
                    <div className="form__input-field form__input-field--weight">
                        <label htmlFor="weightOne" className="form__input-label form__input-label--weight">Monka</label>
                        <input type="number" step="0.1" placeholder="00.0" min="2" max="200" id="weightOne" onChange={this.handleChange} value={this.state.weightOne} className="form__input form__input--number"/>
                        <span>kg</span>
                    </div>
                    <div className="form__input-field form__input-field--date">
                        <label htmlFor="date" className="form__input-label">Date</label>
                        <input type="date" id="date" defaultValue={moment().format('YYYY-MM-D')} onChange={this.handleChange} className="form__input form__input--date" required/>
                    </div>
                    <div className="form__input-field form__input-field--weight">
                        <label htmlFor="weightTwo" className="form__input-label form__input-label--weight">Andy</label>
                        <input type="number" step="0.1" placeholder="00.0" min="2" max="200" id="weightTwo" onChange={this.handleChange} value={this.state.weightTwo} className="form__input form__input--number"/>
                        <span>kg</span>
                    </div>
                    <div className="form__input-field form__input-field--button">
                        <button className="btn btn--save">Save</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecord: (record) => dispatch(addRecord(record))
    }
}

export default connect(null, mapDispatchToProps)(NewRecord);