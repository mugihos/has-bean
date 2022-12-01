const connection = require('./connection')
module.exports = {
  getCafes,
}

function getCafes(db = connection) {
  return db('cafes').select()
}
