const initialState = {
  notes: [],
  loading: false
}

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
