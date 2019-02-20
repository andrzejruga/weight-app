import React from 'react';
import SingleRecord from './SingleRecord';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const History = (props) => {
    const { records, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
        <div className="history">
            <div className="history__container container container--main">
                <h4 className="history__title">Results history</h4>
                <div className="single__box">
                    <div className="single__header single__header--one">Monka</div>
                    <div className="single__header single__header--date">Date</div>
                    <div className="single__header single__header--two">Andy</div>
                </div>
                { records && records.map(record => {
                    return (
                        <Link to={'/record/' + record.id} key={record.id} className="single">
                            <SingleRecord record={record} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        records: state.firestore.ordered.records,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'records', orderBy: ['date', 'desc'] } // this component will update our state everytime there's a change in our db
    ])
)(History);