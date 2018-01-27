export default function notesReducer(state= { notes: []}, action) {
  switch ( action.type ) {
    case 'FETCH_NOTES':
      return {notes: action.payload}
    default:
      return state;
  }

}
