const express = require('express')
const db = require('../db/cafes.js')
const router = express.Router()

//api/v1/cafes/
router.get('/', (req, res) => {
  db.getCafes()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err.message)
      res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
  const newCafe = req.body
  db.addCafe(newCafe)
    .then(() => {
      return db.getCafes()
    })
    .then((cafes) => {
      res.json(cafes)
    })
    .catch((err) => {
      console.error(err.message)
      res.sendStatus(500)
    })
})
module.exports = router
