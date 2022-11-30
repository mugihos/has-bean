const initialRequestState = []

const roasters = (state = initialRequestState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_ROASTERS':
      return payload
    default:
      return state
  }
}

export default roasters