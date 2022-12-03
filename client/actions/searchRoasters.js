import { getSearchRoasters } from '../apis/searchRoasters'

export const SET_SEARCH_ROASTERS = 'SET_SEARCH_ROASTERS'

export function setSearchRoasters(roasters) {
  return {
    type: SET_SEARCH_ROASTERS,
    payload: roasters,
  }
}

export function fetchSearchRoasters() {
  return (dispatch) => {
    return getSearchRoasters().then((roasters) => {
      dispatch(setSearchRoasters(roasters))
    })
    .catch((err) => console.error(err.message))
  }
}