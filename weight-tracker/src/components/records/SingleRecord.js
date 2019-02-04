import React from 'react';

const SingleRecord = ({record}) => {
    return (
        <div className="single">
            <div className="single__one">{record.weightOne}</div>
            <div className="single__date">{record.date}</div>
            <div className="single__two">{record.weightTwo}</div>
        </div>
    )
}

export default SingleRecord;