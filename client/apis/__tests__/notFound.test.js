import nock from 'nock'
import { getNotFound } from '../notFound'

const mockData = [`"file": "https://coffee.alexflipnote.dev/fake_coffee_mock_image.jpg"`]

describe('GET /api/v1/coffeeimage', () => {
  it('gets the coffee api data', async () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .get('/api/v1/coffeeimage')
      .reply(200, mockData)

    const coffeeImage = await getNotFound()
    expect(coffeeImage).toEqual(mockData)
    scope.done()
  })
})