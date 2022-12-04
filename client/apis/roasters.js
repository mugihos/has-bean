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
export function postRoaster(newRoaster) {
  return request
    .post(rootUrl + '/roasters/add')
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

//DELETE remove existing roaster
export function deleteRoaster(id) {
  return request.delete(`${rootUrl}/roasters/${id}`).then((res) => {
    return res.body
  })
}
