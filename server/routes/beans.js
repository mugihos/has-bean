const express = require('express')
const db = require('../db/beans.js')
const router = express.Router()

//api/v1/roasters/
router.get('/', (req, res) => {
  db.getBeans()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err.message)
      res.sendStatus(500)
    })
})

module.exports = router
