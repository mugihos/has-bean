const express = require('express')
const db = require('../db/roasters.js')
const router = express.Router()

//api/v1/roasters/
router.get('/', (req, res) => {
  db.getRoasters()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err.message)
      res.sendStatus(500)
    })
})

module.exports = router