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
                <h4 className="history__title">Last 30 days results</h4>
                { records && records.map(record => {
                    return (
                        <Link to={'/record/' + record.id} key={record.id}>
                            <SingleRecord record={record} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        records: state.firestore.ordered.records,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'records' } // this component will update our state everytime there's a change in our db
    ])
)(History);