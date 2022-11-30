const initialRequestState = []

const roastersReducer = (state = initialRequestState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_ROASTERS':
      return payload
    default:
      return state
  }
}

export default roastersReducer