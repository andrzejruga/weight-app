import React, { Component } from 'react';
import LatestRecords from '../records/LatestRecords';
import NewRecord from '../records/NewRecord';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__container container">
                    <div className="dashboard__new">
                        <NewRecord />
                    </div>
                    <div className="dashboard__latest">
                        <LatestRecords />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;