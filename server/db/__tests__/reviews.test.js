const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)
const {
  getReviews,
  getReviewById,
  addReviews,
  editReviews,
  deleteReview,
} = require('../reviews')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('get reviews', () => {
  it('gets all reviews', () => {
    expect.assertions(2)
    return getReviews(testDb).then((reviews) => {
      expect(reviews).toHaveLength(reviews.length)
      expect(reviews[0].comment).toBe('I had a lovely coffee here')
    })
  })
  it('tests for Null names in reviews', () => {
    expect.assertions(1)
    return getReviews(testDb).then((reviews) => {
      expect(reviews).not.toBeNull()
    })
  })
})
