import React from 'react';

const SmurfList = props => {
    return (
        <div className='smurf-list'>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    )
}

export default SmurfList;