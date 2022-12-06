import request from 'superagent'

const rootUrl = '/api/v1'

export function getRoasters() {
  return request.get(rootUrl + '/roasters').then((res) => {
    return res.body
  })
}

// GET roaster by id
export function getRoasterById(id) {
  return request.get(`${rootUrl}/roasters/${id}`).then((res) => {
    return res.body
  })
}

//POST add new roaster
export function postRoaster(newRoaster, token) {
  return request
    .post(rootUrl + '/roasters/add')
    .set('Authorization', `Bearer ${token}`)
    .send(newRoaster)
    .then((res) => {
      return res.body
    })
}

//UPDATE edit existing roaster info
export function editRoaster(id, newInfo) {
  return request
    .patch(`${rootUrl}/roasters/${id}/edit`)
    .send(newInfo)
    .then((res) => {
      return res.body
    })
}
