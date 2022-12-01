import { getSearch } from '../apis/roasters'

export const SET_ROASTERS = 'SET_ROASTERS'

export function setRoasters(roasters) {
  return {
    type: SET_ROASTERS,
    payload: roasters,
  }
}

export function fetchRoasters() {
  return (dispatch) => {
    return getRoasters().then((roasters) => {
      dispatch(setRoasters(roasters))
    })
  }
}