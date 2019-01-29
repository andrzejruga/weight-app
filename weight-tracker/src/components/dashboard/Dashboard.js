import React, { Component } from 'react';
import LatestRecords from '../records/LatestRecords';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="form"></div>
                <div className="latest">
                    <LatestRecords />
                </div>
            </div>
        )
    }
}

export default Dashboard;