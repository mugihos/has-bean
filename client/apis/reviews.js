import request from 'superagent'

const rootUrl = '/api/v1/reviews'

export function getUserReviewsById(id) {
  return request.get(rootUrl + `/${id}`).then((res) => {
    return res.body
  })
}

export function addUserReviews(newCafe) {
  return request
    .post(rootUrl + '/add')
    .send(newCafe)
    .then((res) => {
      return res.body
    })
}

export function editReviews(editCafe) {
  return request
    .patch(rootUrl + `/${editCafe.id}/edit`)
    .send(editCafe)
    .then((res) => {
      return res.body
    })
}

export function getUserReviewsByBeanId(bean_id) {
  return request.get(rootUrl + `/${bean_id}/bean`).then((res) => {
    return res.body
  })
}
