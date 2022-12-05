import { getReviews } from '../apis/iveBean'
import * as api from '../apis/iveBean'

export const SET_REVIEWS = 'SET_REVIEWS'
export const ADD_REVIEW = 'ADD_REVIEW'
export const DEL_REVIEW = 'DEL_REVIEW'
export const UPDATE_REVIEW = 'UPDATE_REVIEW'

export function setReviews(reviews) {
  return {
    type: SET_REVIEWS,
    payload: reviews,
  }
}

export function fetchReviews() {
  return (dispatch) => {
    return getReviews().then((reviews) => {
      dispatch(setReviews(reviews))
    })
  }
}

export function addReview(newReview) {
  return {
    type: ADD_REVIEW,
    payload: newReview,
  }
}

export function sendReview(newReview) {
  return (dispatch) => {
    return api
      .addReview(newReview)
      .then((newReview) => {
        dispatch(addReview(newReview))
        return newReview
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

export function deleteReview(review) {
  return {
    type: DEL_REVIEW,
    payload: review,
  }
}

export function removeReview(review) {
  return (dispatch) => {
    return api.delReview(review).then(() => {
      dispatch(deleteReview(review))
    })
  }
}

export function updateReview(reviewData) {
  return {
    type: UPDATE_REVIEW,
    payload: reviewData,
  }
}
