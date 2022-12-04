import request from 'superagent'

const rootUrl = '/api/v1'

export function getCafes() {
  return request.get(rootUrl + '/cafes').then((res) => {
    return res.body
  })
}

export function addCafe(newCafe) {
  return request
    .post(rootUrl + '/cafes')
    .send(newCafe)
    .then((res) => {
      console.log('api', res)
      return res.body
    })
}
