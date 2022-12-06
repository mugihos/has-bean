const { expressjwt: jwt } = require('express-jwt')
const jwks = require('jwks-rsa')

const domain = 'https://aihe-ahoaho-2022-coffee.au.auth0.com'
const audience = 'https://coffee/api'

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

module.exports = checkJwt