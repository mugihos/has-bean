const connection = require('./connection')
module.exports = {
  getSearchRoasters,
}

//WILL FIX UP LATER...MIGHT NEED TO ASK FOR HELP
 
// function getSearch(db = connection) {
//   return db('roasters')
//   .join('cafes', 'roasters.id', 'cafes.roaster_id')
//   .select(
//     'roasters.name as roasterName',
//     'cafes.name as cafeName'
//     )
// }

function getSearchRoasters(db = connection) {
  return db('roasters')
  .select(
    'roasters.name as roasterName',
    )
}

// function getSearchCafe(db = connection) {
//   return db('cafes')
//   .select(
//     'cafes.name as cafeName',
//     )
//   }