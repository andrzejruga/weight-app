import React, { Component } from 'react';
import LatestRecords from '../records/LatestRecords';
import NewRecord from '../records/NewRecord';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="form"></div>
                <div className="latest">
                    <NewRecord />
                    <LatestRecords />
                </div>
            </div>
        )
    }
}

export default Dashboard;