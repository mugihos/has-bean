export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT'

export function setSearchResult(result) {
  return {
    type: SET_SEARCH_RESULT,
    payload: result,
  }
}

// not used on website, written to examine test
export function updateSearchResult(result) {
  return (dispatch) => {
    return dispatch(setSearchResult(result))
  }
}
