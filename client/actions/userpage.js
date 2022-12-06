import { getReviews, addReview, delReview } from '../apis/userpage'
// import * as api from '../apis/userpage'

export const SET_REVIEWS = 'SET_REVIEWS'
export const ADD_REVIEW = 'ADD_REVIEW'
export const DEL_REVIEW = 'DEL_REVIEW'
export const UPDATE_REVIEW = 'UPDATE_REVIEW'

// -- simple action get all reviews --
export function setReviews(reviews) {
  return {
    type: SET_REVIEWS,
    payload: reviews,
  }
}

// -- get reviews thunk --
export function fetchReviews(token) {
  return (dispatch) => {
    return getReviews(token)
      .then((reviews) => {
        dispatch(setReviews(reviews))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}

// -- simple action add new review --
export function submitReview(newReview) {
  return {
    type: ADD_REVIEW,
    payload: newReview,
  }
}

// -- add new review and get new id returned thunk --
export function sendReview(newReview, token) {
  return (dispatch) => {
    return addReview(newReview, token)
      .then((newId) => {
        console.log(newId)
        dispatch(submitReview({ ...newReview, id: newId }))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}

// -- simple action delete review by id --
export function deleteReview(id) {
  return {
    type: DEL_REVIEW,
    payload: id,
  }
}

// -- delete review by id thunk --
export function removeReview(id, token) {
  return (dispatch) => {
    return delReview(id, token)
      .then(() => {
        dispatch(deleteReview(id))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}

// -- simple actio update review --
export function updateReview(reviewData) {
  return {
    type: UPDATE_REVIEW,
    payload: reviewData,
  }
}

// -- edit review by id review --
// export function editReview(id, newInfo) {
//   return (dispatch) => {
//     return api
//       .editReview(id, newInfo)
//       .then(() => {
//         dispatch(updateReview(newInfo))
//       })
//       .catch((error) => {
//         console.error(error.message)
//       })
//   }
// }
