const initialRequestState = []

const searchResult = (state = initialRequestState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_SEARCH_RESULT':
      return payload
    default:
      return state
  }
}

export default searchResult
