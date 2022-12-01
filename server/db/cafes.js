const connection = require('./connection')
module.exports = {
  getCafes,
}

function getCafes(db = connection) {
  return db('cafes').select('name', 'address', 'city', 'roaster_id')
}

// 'id as cafeId', 'name', 'address', 'city', 'roaster_id'