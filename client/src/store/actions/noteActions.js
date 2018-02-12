import fetch from 'isomorphic-fetch';
import history from '../../history'

function handleErrors(response) {
  if (!response.ok) {
    errorNotify();
  }
  return response
}

//Attempting to throw errors into Redux Store. Never reaches async thunk action, 
//only outside of it. Return to later. Allow for global access to history? Might 
//solve a lot of problems.
export function errorNotify() {
    history.push("/error/")
    console.log("pushed")
  }
//}

// Through dispatch, tells store that it is fetching notes from API. Fetches
// notes. Dispatches notes to update store.
export function fetchNotes() {
  return function (dispatch) {
    dispatch({type: 'LOADING_NOTES'})
    return fetch('/notes/')
      .then(handleErrors)
      .then(res => res.json())
      .then(responseJson => {
        dispatch({type: 'FETCH_NOTES', payload: responseJson})
      })
      .catch(error => errorNotify())
  }
}

// Takes in form values and history prop, posts new values of Note to API. Pushes
// to root directory and dispatches collection of index data.
export function createNote(values) {
  const request = {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return function (dispatch) {
    dispatch({type: 'LOADING_NOTES'})
    return fetch(`/notes/`, request)
      .then(handleErrors)
      .then(res => res.json())
      .then(responseJson => {
        dispatch({type: 'CREATE_NOTE', payload: responseJson})
      })
      .catch(error => errorNotify())
      .then(history.push("/"))
  }
}

// Takes in id of specific note and history prop. Pushes to page displaying info
// on the deleted note. Deletes note through fetch request. After 10 seconds,
// dispatches function to push to root and render updated index.
export function deleteNote(id) {
  const request = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  history.push(`/notes/${id}/deleted`)
  return function (dispatch) {
    dispatch({type: 'LOADING_NOTES'})
    fetch(`/notes/${id}`, request)
    .then(handleErrors)
    .then(res => res.json())
    .then(responseJson => {
      dispatch({type: 'DELETE_NOTE', payload: responseJson})
    })
    .catch(error => errorNotify())
    setTimeout(() => {
      history.push("/");
      dispatch({type: 'CLEAR_DELETED_NOTE'})
    }, 10000)
}
}

// Takes in same args as createNote, and id of Note being updated. Throws API
// patch request to appropriate route. Pushes to page with info on the edited
// info. Gets info on note.
export function updateNote(values, id) {
  const request = {
    method: 'PATCH',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return function (dispatch) {
    dispatch({type: 'LOADING_NOTES'})
    fetch(`/notes/${id}`, request)
      .then(handleErrors)
      .then(res => res.json())
      .then(responseJson => {
        dispatch({type: 'UPDATE_NOTE', payload: responseJson})
      })
      .catch(error => errorNotify())
      .then(history.push(`/notes/${id}/edited`))
    setTimeout(() => {
      history.push("/");
    }, 10000)
  }

}