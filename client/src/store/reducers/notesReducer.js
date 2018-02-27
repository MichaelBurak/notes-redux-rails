//Sets initial state without which Redux would error.

const initialState = {
  notes: [],
  loading: false,
  deletedNote: {},
  trash: []
}

// Passes initial state and ability to have actions into reducer, switch case of
// types includes a case for when notes are loading, returning non-mutated state
// and setting loading to true, case for fetching notes from the API to keep
// store current, resetting loading to false and giving the action payload as
// notes, creating a new note into the store, updating the notes, deleting a note,
// clearing the state of the deleted note.

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING_NOTES':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_NOTES':
      return {
        ...state,
        notes: action.payload,
        loading: false,
      }
    case 'FETCH_TRASH':
      return{
        ...state,
        trash: action.payload,
        loading: false
      }
    case 'CREATE_NOTE':
      return {
        ...state,
        loading: false,
        notes: [
          ...state.notes,
          action.payload
        ]
      }
    case 'UPDATE_NOTE':
      const noteData = action.payload
      const updatedNoteArray = state.notes.map(note => note.id === noteData.id
          ? noteData : note)
          return {
          ...state,
          loading: false,
          notes: updatedNoteArray
        }
    // case 'DELETE_NOTE':
    //   return {
    //     ...state,
    //     loading: false,
    //     deletedNote: action.payload,
    //     trashCan: [...state.trashCan, action.payload],
    //     notes: state.notes.filter(note => action.payload.id !== note.id)
    //   }
    case 'DELETE_NOTE':
      // const noteAttributes = action.payload
      // debugger 
      // const newNoteArray = state.notes.map(note => note.id === noteAttributes.id
      //     ? noteAttributes : note)
          //debugger 
          return {
          ...state,
          loading: false,
          notes: state.notes.filter(note => action.payload.id !== note.id),
          deletedNote: action.payload,
          trash: [...state.trash, action.payload]
        }
      case 'RESTORE_NOTE':
      // const restoredId = action.payload.id
      // const formerPosition = restoredId-1
      // const notebefore = formerPosition-1
      // const maybe the index of id that is the next greater than restoredId using find,  then indexOF(that id)-1 would be the appropriate index
      // const oldArray = [...state.notes]
      //debugger 
      return {
        ...state,
        loading: false,
        notes: [...state.notes, action.payload],
        trash: state.trash.filter(trashNote => action.payload.id !== trashNote.id)
      }
    case 'HARD_DELETE_NOTE':
      return {
        ...state,
        loading: false,
        deletedNote: action.payload,
        notes: state.notes.filter(note => action.payload.id !== note.id)
      }
    case 'HARD_WIPE_NOTE':
      return {
        ...state,
        loading: false,
        deletedNote: action.payload,
        trash: state.trash.filter(trashNote => action.payload.id !== trashNote.id)
      }
    case 'CLEAR_TRASH':
      return {
        ...state, 
        loading: false,
        trash: []
      }
    case 'CLEAR_DELETED_NOTE':
      return {
        ...state,
        deletedNote: {}
      }
    default:
      return state;
  }
}