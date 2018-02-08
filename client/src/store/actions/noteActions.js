import fetch from 'isomorphic-fetch';

function handleErrors(response) {
  if (!response.ok) {
      errorNotify();
  }
  return response
}

function errorNotify(){
  alert("Something went wrong! Terribly sorry!")
}

//Through dispatch, tells store that it is fetching notes from API. Fetches notes. 
//Dispatches notes to update store.
export function fetchNotes(){
  return function(dispatch) {
    dispatch({type: 'LOADING_NOTES'})
    return fetch('/notes/')
    .then(handleErrors)
    .then(res => res.json()
    )
    .then(responseJson => {
      dispatch({type: 'FETCH_NOTES', payload: responseJson})
    })
    .catch(error => errorNotify())
  }
}

//Takes in form values and history prop, posts new values of Note to API. 
//Pushes to root directory and dispatches collection of index data.
export function createNote(values, history){
    const request = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    }
    return function(dispatch) {
      dispatch({type: 'LOADING_NOTES'})
      return fetch(`/notes`, request)
      .then(handleErrors)
      .then(res => res.json())
      .then(responseJson => {
        dispatch({type: 'CREATE_NOTE', payload: responseJson})
      })
      .catch(error => errorNotify())
      .then(history.push("/"))
    }
    }

//Takes in same args as createNote, and id of Note being updated. Throws API 
//patch request to appropriate route. 
//Pushes to page with info on the edited info. 
//Gets info on note.
export function updateNote(values, history, id){
  const request = {
    method: 'PATCH',
    body: JSON.stringify(values),
    headers: { 'Content-Type': 'application/json' }
  }
  return function(dispatch){
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

//Takes in id of specific note and history prop. Pushes to page displaying info on 
//the deleted note. Deletes note through fetch request. After 10 seconds, dispatches
//function to push to root and render updated index.
export function deleteNote(id, history){
  const request = {
    method: 'delete'
  }
    history.push(`/notes/${id}/deleted`)
    return function(dispatch) {
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

export function save(values, id){
const request = {
  method: 'PATCH',
  body: JSON.stringify(values),
  headers: {
    'Content-Type': 'application/json'
  }
}
fetch(`/notes/${id}`, request)
.then(handleErrors)
.then(response => response.json())
.catch(error => errorNotify())
return dispatch => {
  setTimeout(() => {
    dispatch(fetchNotes())
  }, 300)
}

  
}