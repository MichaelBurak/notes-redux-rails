const initialState = {notes: []}

export default function notesReducer(state= initialState, action) {
  switch ( action.type ) {
    case 'FETCH_NOTES':
      return {...state, notes: action.payload}
    default:
      return state;
  }
}
