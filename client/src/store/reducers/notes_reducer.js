export default function notesReducer(state= {loading: false, notes: []}, action) {
  switch ( action.type ) {
    case 'LOADING_CATS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_CATS':
      return {loading: false, notes: action.payload}
    default:
      return state;
  }

}
