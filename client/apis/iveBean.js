import request from 'superagent'

const rootUrl = '/api/v1/ivebean'

export function getReviews() {
  console.log('sup API')
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}
export function getReviewById(id) {
  return request.get(`/ivebean/${id}`).then((res) => {
    return res.body
  })
}

export function addReview(newReview) {
  return request
    .post('/api/v1/ivebean/submit')
    .send(newReview)
    .then((res) => {
      return res.body
    })
    .catch(console.error)
}

export function delReview(review) {
  return request.delete(`/api/v1/ivebean/${review.id}`)
}
