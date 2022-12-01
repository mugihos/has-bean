import request from 'superagent'

const rootUrl = '/api/v1'

export function getSearchRoasters() {
  return request.get(rootUrl + '/searchroasters').then((res) => {
    return res.body
  })
}
