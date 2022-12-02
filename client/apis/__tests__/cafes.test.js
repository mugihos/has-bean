import nock from 'nock'
import { getCafes } from '../cafes'

describe('GET /api/v1/cafes', () => {
  it('gets cafes from api', async () => {
    const scope1 = nock('http://localhost')
      .get('/api/v1/cafes')
      .reply(200, {
        results: [
          { id: 1, name: 'Thunderbird Cafe' },
          { id: 2, name: 'Ozone Coffee' },
          { id: 3, name: 'Flight Coffee' },
          { id: 4, name: 'The Hangar' },
        ],
      })

    return getCafes().then((cafes) => {
      expect(cafes.results).toHaveLength(4)
      expect(cafes.results[0].name).toBe('Thunderbird Cafe')
      expect(cafes.results[3].name).toBe('The Hangar')
      expect(scope1.isDone()).toBe(true)
    })
  })
})
