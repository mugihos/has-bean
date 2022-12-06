import request from 'superagent'

const rootUrl = '/api/v1'

export function getReviews(token) {
  return request.get(`${rootUrl}/reviews`)
  .set('Authorization', `Bearer ${token}`)
  .then((res) => {
    return res.body
  })
}
export function getReviewById(id) {
  return request.get(`${rootUrl}/reviews/${id}`).then((res) => {
    return res.body
  })
}

export function addReview(newReview, token) {
  return request
    .post(`${rootUrl}/reviews/add`)
    .set('Authorization', `Bearer ${token}`)
    .send(newReview)
    .then((res) => {
      return res.body
    })
    .catch(console.error)
}

export function editReview(id, newInfo) {
  return request
    .patch(`${rootUrl}/reviews/${id}/edit`)
    .send(newInfo)
    .then((res) => {
      return res.body
    })
}

export function delReview(id, token) {
  return request.delete(`${rootUrl}/reviews/${id}`)
  .set('Authorization', `Bearer ${token}`)
}
