const request = require('supertest')
const server = require('../../server')
const { getSearchRoasters } = require('../../db/searchRoasters')

jest.mock('../../db/searchRoasters')

jest.spyOn(console, 'error').mockImplementation(() => {})

const [searchRoastersMockData] = [
  {
    cafeName: "Thunderbird Cafe",
    address: "154 Featherston Street, CBD, Wellington 6011",
    city: "Wellington",
    roasterName: "Supreme",
    location: "Wellington, Auckland, Christchurch",
    details: "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
    roasterId: 1,
    id: 1,
    lat: "-41.2835619",
    lng: "174.7766539"
    },
    {
    cafeName: "Meshino",
    address: "75 Rutland Street, St Albans, Chirstchurch, 8014",
    city: "Christchurch",
    roasterName: "Allpress",
    location: "Auckland",
    details: "We invest in flavour - from our green bean selection to our roasting method and blending, all the way down to training the baristas that use our coffee in their cafes.",
    roasterId: 2,
    id: 2,
    lat: "-43.50606418686944",
    lng: "172.62842349325345"
    },
]

describe('GET /api/v1/searchRoasters/', () => {
  it('should return status 200 and roasters when database is successful.', () => {
    expect.assertions(2)
    getSearchRoasters.mockReturnValue(Promise.resolve(searchRoastersMockData))
    return request(server)
      .get('/api/v1/searchRoasters/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(searchRoastersMockData)
      })
  })
  it('should return status 500 and an error message when database fails.', () => {
    expect.assertions(3)
    getSearchRoasters.mockImplementation(() =>
      Promise.reject(new Error('searchRoasters not working'))
    )
    return request(server)
      .get('/api/v1/searchRoasters/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Internal Server Error')
        expect(console.error).toHaveBeenCalledWith('searchRoasters not working')
      })
  })
})