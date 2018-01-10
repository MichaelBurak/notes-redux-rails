export default function notesReducer(state= {loading: false, notes: []}, action) {
  switch ( action.type ) {
    case 'LOADING_NOTES':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_NOTES':
      return {loading: false, notes: action.payload}
    default:
      return state;
  }

}
