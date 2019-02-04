import React, { Component } from 'react';
import LatestRecords from '../records/LatestRecords';
import NewRecord from '../records/NewRecord';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { records } = this.props; // don't need to desctructure, also can use below this.props.records
    
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
        records: state.record.records
    }
}

export default connect(mapStateToProps)(Dashboard);