import request from 'superagent'

const rootUrl = '/api/v1'

export function getReviews() {
  return request.get(rootUrl + '/ivebean').then((res) => {
    return res.body
  })
}
