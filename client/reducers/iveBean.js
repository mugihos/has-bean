const initialRequestState = []

const reviews = (state = initialRequestState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_REVIEWS':
      return payload
    default:
      return state
  }
}

export default reviews
