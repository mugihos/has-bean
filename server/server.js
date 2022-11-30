const express = require('express')
const path = require('path')
const server = express()
const request = require('superagent')

const roastersRoutes = require('./routes/roasters')
const searchRoutes = require('./routes/search')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/roasters', roastersRoutes)
server.use('/api/v1/search', searchRoutes)

server.get('/api/v1/coffeeimage', (req, res) => {
  request
  .get(`https://coffee.alexflipnote.dev/random.json`)
  .then((response) => {
    res.json(response.body)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
