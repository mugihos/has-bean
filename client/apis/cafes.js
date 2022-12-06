import request from 'superagent'

const rootUrl = '/api/v1'

export function getCafes() {
  return request.get(rootUrl + '/cafes').then((res) => {
    return res.body
  })
}

export function addCafe(newCafe, token) {
  return request
    .post(rootUrl + '/cafes')
    .set('Authorization', `Bearer ${token}`)
    .send(newCafe)
    .then((res) => {
      return res.body
    })
}
