import React from 'react';

const RecordDetails = (props) => {
    const id = props.match.params.id;
            
    return (
        <div className="details container">
            <div className="details__names">
                <div className="details__name details__name--one">Monka</div>
                <div className="details__blank">{id}</div>
                <div className="details__name details__name--two">Andy</div>
            </div>
            <div className="details__data">
                <div className="details__record details__record--one">49,2 kg</div>
                <div className="details__date">29th Jan, 2019</div>
                <div className="details__record details__record--two">72,3 kg</div>
            </div>
            <div className="details__actions">
                <div className="details__delete">
                    <button className="btn btn--delete">Delete</button>
                </div>
                <div className="details__edit">
                    <button className="btn btn--edit">Edit</button>
                </div>
            </div>
        </div>
    )
}

export default RecordDetails;