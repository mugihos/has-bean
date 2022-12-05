const express = require('express')
const db = require('../db/reviews.js')
const router = express.Router()

// GET api/v1/ivebean
router.get('/', (req, res) => {
  db.getReviews()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET api/v1/ivebean/:user_id
router.get('/:user_id', (req, res) => {
  const user_id = req.params.user_id
  db.getReviewById(user_id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// Get api/v1/ivebean/:bean_id/bean
router.get('/:bean_id/bean', (req, res) => {
  const bean_id = req.params.id
  db.getReviewByBeanId(bean_id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// POST api/v1/ivebean/add
router.post('/add', (req, res) => {
  const newReview = req.body
  db.addReviews(newReview)
    .then((ids) => {
      res.json(ids[0])
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//UPDATE api/v1/ivebean/:id/edit
router.patch('/:id/edit', (req, res) => {
  const id = req.params.id
  const newInfo = req.body
  db.editReviews(id, newInfo)
    .then(() => {
      return db.getReviewById(id)
    })
    .then((updatedReview) => {
      res.json(updatedReview)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//DELETE api/v1/ivebean/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteReview(id)
    .then(() => {
      return db.getReviews()
    })
    .then((reviews) => {
      res.json(reviews)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
