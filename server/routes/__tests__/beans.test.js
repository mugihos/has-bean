const request = require('supertest')
const server = require('../../server')
const { getBeans } = require('../../db/beans')
jest.mock('../../db/beans')
jest.spyOn(console, 'error').mockImplementation(() => {})

describe('GET /api/v1/beans', () => {
  it('renders all beans', () => {
    getBeans.mockReturnValue(
      Promise.resolve([
        {
          id: 1001,
          roaster_id: 1,
          region: 'Central American',
          process: 'Washed',
          roast_degree: 'medium',
          flavour_profile: 'Milk Chocolate & Citrus | Sweet & Complex',
          name: 'Supreme blend',
        },
        {
          id: 1002,
          roaster_id: 3,
          region: 'Papua New Guinea | Honduras | Ethiopia | Sumatra',
          process: 'Washed',
          roast_degree: 'value',
          flavour_profile: 'Forest fruit | Cacao',
          name: 'Aotea blend',
        },
      ])
    )
    return request(server)
      .get('/api/v1/beans')
      .then((res) => {
        expect(res.text).toContain('Milk Chocolate & Citrus | Sweet & Complex')
        expect(res.text).toContain('Aotea blend')
      })
  })
  it('should return status 500 and an error message when database fails.', () => {
    getBeans.mockImplementation(() => Promise.reject(new Error('cool bean')))
    return request(server)
      .get('/api/v1/beans/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('cool bean')
      })
  })
})
