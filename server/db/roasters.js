const connection = require('./connection')
module.exports = {
  geRoasters,
}

function geRoasters(db = connection) {
  return db('roasters').select()
}


