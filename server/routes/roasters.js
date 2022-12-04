const express = require('express')
const db = require('../db/roasters.js')
const router = express.Router()

// GET api/v1/roasters/
router.get('/', (req, res) => {
  db.getRoasters()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// POST api/v1/roasters/add
router.post('/add', (req, res) => {
  const newRoaster = req.body
  db.addRoaster(newRoaster)

    .then((ids) => {
      res.json(ids[0])
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// UPDATE api/v1/roasters/:id/edit
router.patch('/:id/edit', (req, res) => {
  const id = req.params.id
  const newRoasterData = req.body
  db.editRoaster(id, newRoasterData)
    .then(() => {
      return db.getRoasterById(id)
    })
    .then((updatedRoaster) => {
      res.json(updatedRoaster)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
