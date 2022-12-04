const request = require('supertest')
const server = require('../../server')
const { getRoasters, addRoaster } = require('../../db/roasters')

jest.mock('../../db/roasters')

jest.spyOn(console, 'error').mockImplementation(() => {})

beforeEach(() => {
  jest.resetAllMocks()
})

const fakeGetData = [
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
]

const fakeNewData = {
  name: 'Flight Coffee',
  location: 'Wellington',
  details:
    'Flight Coffee is a family of driven people that work together to produce amazing coffee, while always aiming to have the best impact we can on the industry and the lives it connects',
  image_url:
    'https://cdn.shopify.com/s/files/1/0104/2682/files/logo_gold-06_395x.png?v=1638386421',
}

describe('GET /api/v1/roasters', () => {
  it('return status200 and roaster when db is succssful', () => {
    expect.assertions(3)
    getRoasters.mockReturnValue(Promise.resolve(fakeGetData))
    return request(server)
      .get('/api/v1/roasters')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(fakeGetData)
        expect(res.body).toHaveLength(2)
      })
  })
  it('return status 500 and error message when route fail', () => {
    expect.assertions(3)
    getRoasters.mockImplementation(() => Promise.reject('GET failed'))
    return request(server)
      .get('/api/v1/roasters')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('GET failed')
        expect(res.text).toContain('Something went wrong')
      })
  })
})

describe('POST /api/v1/roasters/add', () => {
  it('should return status 200 and updated table', () => {
    expect.assertions(1)
    addRoaster.mockImplementation(() => Promise.resolve(fakeNewData))
    return request(server)
      .post('/api/v1/roasters/add')
      .send(fakeNewData)
      .then((res) => expect(res.status).toBe(200))
  })

  it('return status 500 and error message when route fail', () => {
    expect.assertions(3)
    addRoaster.mockImplementation(() => Promise.reject('POST failed'))
    return request(server)
      .post('/api/v1/roasters/add')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('POST failed')
        expect(res.text).toContain('Something went wrong')
      })
  })
})
