import nock from 'nock'
import { getSearchRoasters } from '../searchRoasters'

const mockData = [
  { id: 1, name: 'Thunderbird Cafe' },
  { id: 2, name: 'Ozone Coffee' },
  { id: 3, name: 'Flight Coffee' },
  { id: 4, name: 'The Hangar' },
]

describe('GET /api/v1/searchRoasters', () => {
  it('gets the searchRoasters content', async () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .get('/api/v1/searchroasters')
      .reply(200, mockData)

    const searchRoastersData = await getSearchRoasters()
    expect(searchRoastersData).toEqual(mockData)
    scope.done()
  })
})