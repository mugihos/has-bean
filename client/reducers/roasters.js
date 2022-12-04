import { SET_ROASTERS, ADD_ROASTER } from '../actions/roasters'
const initialRequestState = []

const roasters = (state = initialRequestState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_ROASTERS:
      return payload

    case ADD_ROASTER:
      return [...state, payload]
    default:
      return state
  }
}

export default roasters
