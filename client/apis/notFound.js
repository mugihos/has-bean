import request from 'superagent'

const rootUrl = '/api/v1'

// GET /api/v1/coffeeimage
export function getNotFound() {
  return request.get(rootUrl + '/coffeeimage').then((res) => {
    return res.body
  })
}