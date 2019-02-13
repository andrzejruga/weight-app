import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/en-gb';

const RecordDetails = (props) => {
    const { record, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />

    if (record) {
        return (
            <div className="details">
                <div className="details__container container container--main">
                    <div className="details__box">
                        <h4 className="details__title">Single record details</h4>
                        <div className="details__data">
                            <div className="details__name details__name--one">Monka</div>
                            <div className="details__name details__name--two">Andy</div>
                            <div className="details__record details__record--one">{record.weightOne} kg</div>
                            <div className="details__date">{moment(record.date).format('dddd, D MMM YYYY')}</div>
                            <div className="details__record details__record--two">{record.weightTwo} kg</div>
                        </div>
                        <div className="details__misc">
                            <div className="details__added-by">Added by {record.authorFirstName} {record.authorLastName}</div>
                            <div className="details__added-date">Date added: {moment(record.createdAt.toDate()).calendar()}</div>
                        </div>
                        <div className="details__actions">
                            <div className="details__edit">
                                <button className="btn btn--edit">Edit</button>
                            </div>
                            <div className="details__delete">
                                <button className="btn btn--delete">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <p>Loading record...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const records = state.firestore.data.records;
    const record = records ? records[id] : null;
    return {
        record: record,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'records' }
    ])
)(RecordDetails);