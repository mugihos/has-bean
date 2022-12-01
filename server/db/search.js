const connection = require('./connection')
module.exports = {
  getSearch,
}

function getSearch(db = connection) {
  return db('roasters').select()
  .join()
}
