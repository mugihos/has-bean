import { SET_CAFES } from '../actions/cafes'
const initialRequestState = []

const cafes = (state = initialRequestState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CAFES:
      return payload
    default:
      return state
  }
}

export default cafes
