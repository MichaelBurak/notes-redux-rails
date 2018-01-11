import fetch from 'isomorphic-fetch'
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
export function createNote(){
    const request = {
      method: 'POST',
      body: JSON.stringify(),
      headers: { 'Content-Type': 'application/json' }
    }
    return function(dispatch){
    return fetch(`/notes`, request)
      .then(response => response.json())
    }
  }