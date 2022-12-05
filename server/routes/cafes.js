const express = require('express')
const db = require('../db/cafes.js')
const router = express.Router()
const checkJwt = require('../auth0') 

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

router.post('/', checkJwt, (req, res) => {
  const newCafe  = req.body
  // const auth0Id = req.auth?.sub
  // const newNewCafe = {
  //   name: newCafe.name,
  //   address: newCafe.address,
  //   city: newCafe.city,
  //   roaster_id: newCafe.roasterId,
  //   lat: newCafe.lat,
  //   lng: newCafe.lng
  // }

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
