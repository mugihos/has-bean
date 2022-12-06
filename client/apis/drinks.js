import request from 'superagent'

export function getDrinks(option) {
  return request
    .get(`https://api.sampleapis.com/coffee/${option}`)
    .then((res) => {
      return res.body
    })
}
