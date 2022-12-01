const initialRequestState = []

const searchRoasters = (state = initialRequestState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_SEARCH_ROASTERS':
      return payload
    default:
      return state
  }
}

export default searchRoasters