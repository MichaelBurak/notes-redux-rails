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

export function fetchNote(){
  const request = {
    method: 'GET',
    body: JSON.parse()
  }
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

  export function updateNote(values, history, id, dispatch){
  const request = {
    method: 'PATCH',
    body: JSON.stringify(values),
    headers: { 'Content-Type': 'application/json' }
  }
  fetch(`/notes/${id}`, request)
    return function(dispatch){
      history.push(`/notes/${id}`)
    }
  }
