export default function notesReducer(state= { notes: []}, action) {
  switch ( action.type ) {
    case 'FETCH_NOTES':
      return {loading: false, notes: action.payload}
    default:
      return state;
  }

}
