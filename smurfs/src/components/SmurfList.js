import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions';




const SmurfList = props => {
    return (
        <div className='smurf-list'>
            <button className='close-button'>+</button>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            <p>{props.smurf.id}</p>
        </div>
    )
}

export default connect(
    null,
    { deleteSmurf }
    )(SmurfList);