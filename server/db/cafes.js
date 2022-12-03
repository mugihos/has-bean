const connection = require('./connection')
module.exports = {
  getCafes,
}

function getCafes(db = connection) {
  return db('cafes')
    .join('roasters', 'roasters.id', 'cafes.roaster_id')
    .select(
      'cafes.name as name',
      'cafes.address as address',
      'cafes.city as city',
      'roasters.name as roasterName',
      'roasters.location as location',
      'roasters.details as details',
      'roasters.id as roasterId',
      'cafes.id as id',
      'cafes.lat as lat',
      'cafes.lng as lng'
    )
}
