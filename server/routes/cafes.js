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

module.exports = router