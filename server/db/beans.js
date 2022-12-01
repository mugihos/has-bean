const connection = require('./connection')

function getBeans(db = connection) {
  return db('beans').select()
}

module.exports = {
  getBeans,
}
