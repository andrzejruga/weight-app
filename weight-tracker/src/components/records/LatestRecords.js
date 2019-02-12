import React from 'react';
import SingleRecord from './SingleRecord';
import { Link } from 'react-router-dom';

const LatestRecords = ({records}) => {
    return (
        <div className="latest">
            <h4 className="latest__title">Last 7 days results</h4>
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
    )
}

export default LatestRecords;