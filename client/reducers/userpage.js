import {
  SET_REVIEWS,
  ADD_REVIEW,
  DEL_REVIEW,
  UPDATE_REVIEW,
} from '../actions/userpage'

const initialRequestState = []
const reviews = (state = initialRequestState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_REVIEWS:
      return [...payload]

    case ADD_REVIEW:
      return payload

    case UPDATE_REVIEW:
      return state.map((review) => {
        if (review.id !== payload.id) {
          return review
        } else {
          return payload
        }
      })

    case DEL_REVIEW:
      return state.filter((review) => {
        return review.id !== payload
      })
    default:
      return state
  }
}

export default reviews
