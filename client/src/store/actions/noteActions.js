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
    history.push("/")
    return dispatch => {
      setTimeout(() => {
        dispatch(fetchNotes())
      }, 300)
  }
    }

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

export function deleteNote(id, history){
  const request = {
    method: 'delete'
  }
    history.push(`/notes/${id}/deleted`)
    return dispatch => {
      setTimeout(() => {
        fetch(`/notes/${id}`, request)
      }, 300)
      setTimeout(() => {
        dispatch(thunkPushAfterDelete(history));
      }, 10000)
    }
  }

export function thunkPushAfterDelete(history){
  history.push("/")
  return function(dispatch) {
  setTimeout(() => {
    dispatch(fetchNotes())
  }, 10)
  }

  }
