const connection = require('./connection')
module.exports = {
  getRoasters,
}

function getRoasters(db = connection) {
  return db('roasters').select()
}
