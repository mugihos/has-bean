const connection = require('./connection')
module.exports = {
  getRoasters,
  addRoaster,
  editRoaster,
  getRoasterById,
}

function getRoasters(db = connection) {
  return db('roasters').select()
}

function getRoasterById(id, db = connection) {
  return db('roasters').where({ id }).select()
}

function addRoaster(roaster, db = connection) {
  return db('roasters').insert(roaster)
}

function editRoaster(id, newInfo, db = connection) {
  return db('roasters').where({ id }).update(newInfo)
}
