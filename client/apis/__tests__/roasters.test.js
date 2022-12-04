import nock from 'nock'
import { getRoasters } from '../roasters'

describe('GET /api/v1/roasters', () => {
  it('gets roasters from api', async () => {
    const scope1 = nock('http://localhost')
      .get('/api/v1/roasters')
      .reply(200, {
        results: [
          { id: 1, name: 'Coffee Supreme' },
          { id: 2, name: 'Allpress Espresso' },
          { id: 3, name: 'KoKōkako Organic Coffee' },
          { id: 4, name: 'Mojo Coffee Roasters' },
        ],
      })

    return getRoasters().then((roasters) => {
      expect(roasters.results).toHaveLength(4)
      expect(roasters.results[0].name).toBe('Coffee Supreme')
      expect(roasters.results[3].name).toBe('Mojo Coffee Roasters')
      expect(scope1.isDone()).toBe(true)
    })
  })
})
