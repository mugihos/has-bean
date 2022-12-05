const request = require('supertest')
const server = require('../../server')
const {
  getReviews,
  addReviews,
  editReviews,
  deleteReview,
} = require('../../db/reviews')
jest.mock('../../db/reviews')
jest.spyOn(console, 'error').mockImplementation(() => {})

const fakeData = [
  {
    id: 1,
    auth_user_id: 1,
    roaster_id: 2,
    cafe_id: 201,
    bean_id: 1001,
    date: new Date(Date.now()),
    comment: 'I had a lovely coffee here',
    rating: 4,
  },
  {
    id: 2,
    auth_user_id: 2,
    roaster_id: 4,
    cafe_id: 204,
    bean_id: 1008,
    date: new Date(Date.now()),
    comment: 'Great coffee',
    rating: 5,
  },
]

const fakeNewData = {
  auth_user_id: 2,
  roaster_id: 5,
  cafe_id: 201,
  bean_id: 1001,
  date: new Date(Date.now()),
  comment: 'wow wow coffee',
  rating: 5,
}

describe('GET /api/v1/reviews', () => {
  it('gets all reviews', () => {
    expect.assertions(3)
    getReviews.mockReturnValue(Promise.resolve(fakeData))
    return request(server)
      .get('/api/v1/reviews')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.text).toContain('Great coffee')
        expect(res.body).toHaveLength(2)
      })
  })
  it('should return status 500 and an error message when database fails.', () => {
    expect.assertions(3)
    getReviews.mockImplementation(() => Promise.reject('No reviews found'))
    return request(server)
      .get('/api/v1/reviews')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('No reviews found')
        expect(res.text).toContain('Something went wrong')
      })
  })
})

describe('POST /api/v1/reviews/add', () => {
  it('should return status 200 and updated table', () => {
    expect.assertions(1)
    addReviews.mockImplementation(() => Promise.resolve(fakeNewData))
    return request(server)
      .post('/api/v1/reviews/add')
      .send(fakeNewData)
      .then((res) => expect(res.status).toBe(200))
  })

  it('return status 500 and error message when route fail', () => {
    expect.assertions(3)
    addReviews.mockImplementation(() => Promise.reject('POST failed'))
    return request(server)
      .post('/api/v1/reviews/add')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('POST failed')
        expect(res.text).toContain('Something went wrong')
      })
  })
})
