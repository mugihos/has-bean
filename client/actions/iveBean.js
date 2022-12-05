import { getReviews } from '../apis/iveBean'

export const SET_REVIEWS = 'SET_REVIEWS'

export function setReviews(reviews) {
  return {
    type: SET_REVIEWS,
    payload: reviews,
  }
}

export function fetchReviewss() {
  return (dispatch) => {
    return getReviews().then((reviews) => {
      dispatch(setReviews(reviews))
    })
  }
}
