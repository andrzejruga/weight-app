import React from 'react';
import moment from 'moment';

const SingleRecord = ({record}) => {
    return (
        <div className="single__box">
            <div className="single__one">{parseFloat(record.weightOne).toFixed(1)}</div>
            <div className="single__date">{moment(record.date).format('DD MMM YYYY')}</div>
            <div className="single__two">{parseFloat(record.weightTwo).toFixed(1)}</div>
        </div>
    )
}

export default SingleRecord;