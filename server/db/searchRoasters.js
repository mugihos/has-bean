const connection = require('./connection')
module.exports = {
  getSearchRoasters,
}
 
function getSearchRoasters(db = connection) {
  return db('roasters')
  .join('cafes', 'roasters.id', 'cafes.roaster_id')
  .select(
    'roasters.id as roasterId',
    'roasters.name as roasterName',
    'roasters.location as location',
    'roasters.details as details',
    'cafe.id as cafeId',
    'cafes.name as cafeName',
    'cafes.address as address',
    'cafes.city as city',
    // 'cafes.lat as latitude',
    // 'cafes.lng as longitude'
    )
}
