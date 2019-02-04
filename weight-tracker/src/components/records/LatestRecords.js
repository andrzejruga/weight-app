import React from 'react';
import SingleRecord from './SingleRecord';

const LatestRecords = ({records}) => {
    return (
        <div className="latest">
            <h4 className="latest__title">Last 7 days results</h4>
            { records && records.map(record => {
                return (
                    <SingleRecord record={record} key={record.id} />
                )
            })}
        </div>
    )
}

export default LatestRecords;