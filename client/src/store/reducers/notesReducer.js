//Sets initial state without which Redux would error.

const initialState = {
  notes: [],
  loading: false
}

//Passes initial state and ability to have actions into reducer, switch case of types 
//includes a case for when notes are loading, returning non-mutated state and setting 
//loading to true, and case for fetching notes from the API to keep store current, 
//resetting loading to false and giving the action payload as notes.

export default function notesReducer(state= initialState, action) {
  switch ( action.type ) {
    case 'LOADING_NOTES':
      return {...state, loading: true}
    case 'FETCH_NOTES':
      return {...state, loading: false, notes: action.payload}
    default:
      return state;
  }
}
