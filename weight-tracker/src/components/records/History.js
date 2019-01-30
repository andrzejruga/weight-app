import React from 'react';
import SingleRecord from './SingleRecord';

const History = () => {
    return (
        <div className="latest">
            <h4 className="latest__title">Last 30 days results</h4>
            <SingleRecord />
            <SingleRecord />
            <SingleRecord />
            <SingleRecord />
            <SingleRecord />
            <SingleRecord />
            <SingleRecord />
            <SingleRecord />
            <SingleRecord />
            <SingleRecord />
        </div>
    )
}

export default History;