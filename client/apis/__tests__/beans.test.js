import nock from 'nock'
import { getBeans } from '../beans'

describe('GET /api/v1/beans', () => {
  it('gets beans from api', async () => {
    const scope1 = nock('http://localhost')
      .get('/api/v1/beans')
      .reply(200, {
        results: [
          { id: 1, name: 'soy bean' },
          { id: 2, name: 'Mr. Bean' },
          { id: 3, name: 'never bean' },
        ],
      })

    return getBeans().then((beans) => {
      expect(beans.results).toHaveLength(3)
      expect(beans.results[0].name).toBe('soy bean')
      expect(beans.results[2].name).toBe('never bean')
      expect(scope1.isDone()).toBe(true)
    })
  })
})
