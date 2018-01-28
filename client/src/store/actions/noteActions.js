import fetch from 'isomorphic-fetch';
import { BrowserRouter } from 'react-router-dom'

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

export function createNote(values, history){
    const request = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(`/notes`, request)
      .then(response => response.json())
    return function(dispatch) {
    history.push("/")
  }
    }

export function updateNote(values, history, id){
  const request = {
    method: 'PATCH',
    body: JSON.stringify(values),
    headers: { 'Content-Type': 'application/json' }
  }
  fetch(`/notes/${id}`, request)
    .then(response => response.json())
    return function(dispatch) {
      history.push(`/notes/${id}/edited`)
    }
    }

export function deleteNote(id, history){
  const request = {
    method: 'delete',
    //headers: { 'Content-Type': 'application/json'}
  }
    history.push(`/notes/${id}/deleted`)
    fetch(`/notes/${id}`, request)
    return dispatch => {
      setTimeout(() => {
        dispatch(thunkPushAfterDelete(history));
      }, 30000)
  }
}

  export function thunkPushAfterDelete(history){
    return function(dispatch) {
    history.push("/")  
    }

  }
