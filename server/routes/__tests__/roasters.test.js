const request = require('supertest')
const server = require('../../server')
const { getRoasters } = require('../../db/roasters')
jest.mock('../../db/roasters')
jest.spyOn(console, 'error').mockImplementation(() => {})

describe('GET /api/v1/roasters', () => {
  it('renders all roasters', () => {
    getRoasters.mockReturnValue(
      Promise.resolve([
        {
          id: 1,
          name: 'Coffee Supreme',
          location: 'Wellington, Auckland, Christchurch',
          details:
            "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
          url: 'https://coffeesupreme.com/',
          image_url: 'https://tinyurl.com/3afx7e7m',
        },
        {
          id: 2,
          name: 'Allpress Espresso',
          location: 'Auckland',
          details:
            'We invest in flavour - from our green bean selection to our roasting method and blending, all the way down to training the baristas that use our coffee in their cafes.',
          url: 'https://www.allpressespresso.com/',
          image_url: 'https://tinyurl.com/3e73p5we',
        },
      ])
    )
    return request(server)
      .get('/api/v1/roasters')
      .then((res) => {
        expect(res.text).toContain('Coffee Supreme')
        expect(res.text).toContain('Wellington')
      })
  })
  it('should return status 500 and an error message when database fails.', () => {
    getRoasters.mockImplementation(() =>
      Promise.reject(new Error('No roasters found'))
    )
    return request(server)
      .get('/api/v1/roasters/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('No roasters found')
      })
  })
})
