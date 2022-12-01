const connection = require('./connection')
module.exports = {
  getCafes,
}

function getCafes(db = connection) {
  return db('cafes').select()
}

// 'id as cafeId', 'name', 'address', 'city', 'roaster_id'