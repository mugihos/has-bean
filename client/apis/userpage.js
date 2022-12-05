import request from 'superagent'

const rootUrl = '/api/v1'

export function getReviews() {
  return request.get(`${rootUrl}/reviews`).then((res) => {
    return res.body
  })
}
export function getReviewById(id) {
  return request.get(`${rootUrl}/reviews/${id}`).then((res) => {
    return res.body
  })
}

export function addReview(newReview) {
  return request
    .post(`${rootUrl}/reviews/add`)
    .send(newReview)
    .then((res) => {
      console.log(res)
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

export function delReview(id) {
  return request.delete(`${rootUrl}/reviews/${id}`)
}
