import React from 'react';
import SingleRecord from './SingleRecord';
import { Link } from 'react-router-dom';

const LatestRecords = ({records}) => {
    return (
        <div className="latest">
            <h4 className="latest__title">Last 7 days results</h4>
            { records && records.map(record => {
                return (
                    <Link to={'/record/' + record.id}>
                        <SingleRecord record={record} key={record.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default LatestRecords;