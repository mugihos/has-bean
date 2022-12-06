import { getRoasters, postRoaster } from '../apis/roasters'

export const SET_ROASTERS = 'SET_ROASTERS'
export const ADD_ROASTER = 'ADD_ROASTER'
export const UPDATE_ROASTER = 'UPDATE_ROASTER'
export const DELETE_ROASTER = 'DELETE_ROASTER'

// -- get roaster data --
export function setRoasters(roasters) {
  return {
    type: SET_ROASTERS,
    payload: roasters,
  }
}

// -- add new roaster --
export function addRoaster(newRoaster) {
  return {
    type: ADD_ROASTER,
    payload: newRoaster,
  }
}

// -- update roaster --
export function updateRoaster(newInfo) {
  return {
    type: UPDATE_ROASTER,
    payload: newInfo,
  }
}

// GET all roasters data
export function fetchRoasters() {
  return (dispatch) => {
    return getRoasters()
      .then((roasters) => {
        dispatch(setRoasters(roasters))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}

// POST new roasters
export function submitRoaster(newRoaster, token) {
  return (dispatch) => {
    return postRoaster(newRoaster, token)
      .then((newId) => {
        dispatch(addRoaster({ ...newRoaster, id: newId }))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
