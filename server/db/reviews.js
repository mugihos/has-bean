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
  console.log('db query')
  return db('reviews')
    .join('beans', 'reviews.bean_id', 'beans.id')
    .join('cafes', 'reviews.cafe_id', 'cafes.id')
    .join('roasters', 'reviews.roaster_id', 'roasters.id')
    .select(
      'beans.flavour_profile as flavourProfile',
      'beans.name as beansName',
      'beans.flavour_profile as flavourDesc',
      'cafes.name as cafesName',
      'cafes.city as cafesCity',
      'roasters.name as roasterName',
      'reviews.*'
    )
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
