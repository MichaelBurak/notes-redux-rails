import fetch from 'isomorphic-fetch';
import { BrowserRouter } from 'react-router-dom'

//Through dispatch, tells store that it is fetching notes from API. Fetches notes. 
//Dispatches notes to update store.
export function fetchNotes(){
  return function(dispatch) {
    dispatch({type: 'LOADING_NOTES'})
    return fetch('/notes/')
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'FETCH_NOTES', payload: responseJson})
    })
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
    fetch(`/notes`, request)
      .then(response => response.json())
    history.push("/")
    return dispatch => {
        dispatch(fetchNotes())
  }
    }

//Takes in same args as createNote, and id of Note being updated. Throws API 
//patch request to appropriate route. 
//Pushes to page with info on the edited info. 
//After 3 seconds, gets info on note. As of yet, can not guarantee display without timer.
export function updateNote(values, history, id){
  const request = {
    method: 'PATCH',
    body: JSON.stringify(values),
    headers: { 'Content-Type': 'application/json' }
  }
  history.push(`/notes/${id}/edited`)
  fetch(`/notes/${id}`, request)
    .then(response => response.json())
    return dispatch => {
      setTimeout(() => {
        dispatch(fetchNotes())
      }, 300)
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
    return dispatch => {
        fetch(`/notes/${id}`, request)
      setTimeout(() => {
        dispatch(thunkPushAfterDelete(history));
      }, 10000)
    }
  }

//Called by deleteNote as thunk async action. Pushes to root and displays accurate
//index via fetchNotes()
export function thunkPushAfterDelete(history){
  history.push("/")
  return function(dispatch) {
  setTimeout(() => {
    dispatch(fetchNotes())
  }, 10)
  }

  }
