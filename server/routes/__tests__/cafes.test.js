const request = require('supertest')
const server = require('../../server')
const { getCafes } = require('../../db/cafes')
jest.mock('../../db/cafes')
jest.spyOn(console, 'error').mockImplementation(() => {})

describe('GET /api/v1/cafes', () => {
  it('renders all cafes', () => {
    getCafes.mockReturnValue(
      Promise.resolve([
        {
          id: 1,
          name: 'Thunderbird Cafe',
          address: '154 Featherston Street, CBD, Wellington 6011',
          city: 'Wellington',
          roaster_id: 1,
          lat: '-41.2835619',
          lng: '174.7766539',
        },
        {
          id: 2,
          name: 'Meshino',
          address: '75 Rutland Street, St Albans, Chirstchurch, 8014',
          city: 'Christchurch',
          roaster_id: 2,
          lat: '-43.50606418686944',
          lng: '172.62842349325345',
        },
      ])
    )
    return request(server)
      .get('/api/v1/cafes')
      .then((res) => {
        expect(res.text).toContain('Thunderbird Cafe')
        expect(res.text).toContain('Christchurch')
      })
  })
  it('should return status 500 and an error message when database fails.', () => {
    getCafes.mockImplementation(() => Promise.reject(new Error('No cafe')))
    return request(server)
      .get('/api/v1/cafes/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('No cafe')
      })
  })
})
