import React from 'react';
import SingleRecord from './SingleRecord';

const LatestRecords = () => {
    return (
        <div className="latest">
            <h4 className="latest__title">Month to date records</h4>
            <SingleRecord />
            <SingleRecord />
            <SingleRecord />
            <SingleRecord />
            <SingleRecord />
        </div>
    )
}

export default LatestRecords;