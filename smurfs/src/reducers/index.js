import {
SMURFS,
FETCHING_SMURFS,
ADDING_SMURF,
// UPDATING_SMURF,
// DELETING_SMURF,
ERROR,
DELETING_SMURF,
} from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
  
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS: {
      return { 
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
    }

    case ADDING_SMURF: {
      return {
        ...state,
        addingSmurf: true,
        smurfs: [...state.smurfs, action.payload]
      }
    }

    case DELETING_SMURF: {
      return {
        ...state,
        deletingSmurf: true,
        smurfs: [...state.smurfs, - action.payload]
      }
    }

    case SMURFS: {
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    }

    default:
      return state;
  }
};

export default reducer;
