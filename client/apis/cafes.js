import request from 'superagent'

const rootUrl = '/api/v1'

export function getCafes() {
  return request.get(rootUrl + '/cafes').then((res) => {
    return res.body
  })
}