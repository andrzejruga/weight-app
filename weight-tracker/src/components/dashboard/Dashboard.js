import React, { Component } from 'react';
import LatestRecords from '../records/LatestRecords';
import NewRecord from '../records/NewRecord';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { records, auth } = this.props; // don't need to desctructure, also can use below this.props.records
        if (!auth.uid) return <Redirect to='/signin' />
    
        return (
            <div className="dashboard">
                <div className="dashboard__container container container--main">
                    <div className="dashboard__new">
                        <NewRecord />
                    </div>
                    <div className="dashboard__latest">
                        <LatestRecords records={records} />
                    </div>
                </div>
            </div>
        )
    }
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
        { collection: 'records', orderBy: ['date', 'desc'], limit: 7 } // this component will update our state everytime there's a change in our db
    ])
)(Dashboard);