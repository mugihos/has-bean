const express = require('express')
const db = require('../db/search.js')
const router = express.Router()

//api/v1/search/
router.get('/', (req, res) => {
  db.getSearchRoasters()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err.message)
      res.sendStatus(500)
    })
})



module.exports = router