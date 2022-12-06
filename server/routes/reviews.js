const express = require('express')
const db = require('../db/reviews.js')
const router = express.Router()
const checkJwt = require('../auth0') 

// GET api/v1/reviews
router.get('/', checkJwt, (req, res) => {
  const auth0Id = req.auth?.sub
  db.getReviews(auth0Id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET api/v1/reviews/:id
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getReviewById(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// Get api/v1/reviews/:bean_id/bean
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

// POST api/v1/reviews/add
router.post('/add', checkJwt, (req, res) => {
  const review = req.body
  const auth0Id = req.auth?.sub
  const newReview = {
    ...review,
    auth_user_id: auth0Id,
  }

  db.addReviews(newReview)
    .then((ids) => {
      res.json(ids[0])
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//UPDATE api/v1/reviews/:id/edit
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

//DELETE api/v1/reviews/:id
router.delete('/:id', checkJwt, (req, res) => {
  const id = req.params.id
  const auth0Id = req.auth?.sub
  db.userCanEdit(id, auth0Id)
    .then(() => db.deleteReview(id))
    .then(() => {
      return db.getReviews(auth0Id)
    })
    .then((reviews) => {
      res.json(reviews)
    })
    .catch((err) => {
      console.error(err)
      if (err.message === 'Unauthorized') {
        res
          .status(403)
          .send('Unauthorized: Only the user who added the fruit may update it')
      } else {
        res.status(500).send('Something went wrong')
      }
    })
})

module.exports = router
