const connection = require('./connection')
module.exports = {
  getSearchRoasters,
}
 
function getSearchRoasters(db = connection) {
  return db('roasters')
  .join('cafes', 'roasters.id', 'cafes.roaster_id')
  .select(
    'cafes.name as cafeName',
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