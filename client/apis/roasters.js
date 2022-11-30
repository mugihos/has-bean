import request from 'superagent'

const rootUrl = '/api/v1'

export function getRoasters() {
  return request.get(rootUrl + '/roasters').then((res) => {
    return res.body
  })
}
