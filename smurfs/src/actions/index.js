import axios from 'axios';
import reducer from '../reducers';

/* ACTION TYPES */
export const SMURFS = 'SMURFS';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const ERROR = 'ERROR';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS })
  const request = axios.get('http://localhost:3333/smurfs');

  request.then(res => dispatch({ type: SMURFS, payload: res.data }))

  request.catch(err => dispatch({ type: ERROR, payload: err }));
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADDING_SMURF, payload: newSmurf })
 const add = axios.post('http://localhost:333/smurfs');

 add.then(res => dispatch({ type: SMURFS, payload: res.data }))
 
 add.catch(err => dispatch({ type: ERROR, payload: err }));
}

