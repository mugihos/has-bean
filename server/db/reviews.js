const connection = require('./connection')
module.exports = {
  getReviews,
  getReviewById,
  addReviews,
  editReviews,
  deleteReview,
  getReviewByBeanId,
}

function getReviews(db = connection) {
  return db('reviews').select()
}

function getReviewById(id, db = connection) {
  return db('reviews').where({ id }).select()
}
function getReviewByBeanId(bean_id, db = connection) {
  return db('reviews').where({ bean_id }).select()
}

function addReviews(newReview, db = connection) {
  return db('reviews').insert(newReview)
}

function editReviews(id, newContent, db = connection) {
  return db('reviews').where({ id }).update(newContent)
}

function deleteReview(id, db = connection) {
  return db('reviews').where({ id }).del()
}
