const initialRequestState = []

const beans = (state = initialRequestState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_BEANS':
      return payload
    default:
      return state
  }
}

export default beans
