const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)
const {
  getReviews,
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
      expect(reviews[0].comment).toContain('I had a lovely coffee here')
    })
  })
  it('tests for Null names in reviews', () => {
    expect.assertions(1)
    return getReviews(testDb).then((reviews) => {
      expect(reviews).not.toBeNull()
    })
  })
})

describe('edit reviews', () => {
  it('edit review selected by id', () => {
    expect.assertions(1)
    const newData = {
      comment: 'great coffee',
    }
    return editReviews(2, newData, testDb).then((newReview) => {
      expect(newReview).toBe(1)
    })
  })
})

describe('add reviews', () => {
  it('add review and return new id', () => {
    expect.assertions(1)
    const fakeData = {
      auth_user_id: 1,
      roaster_id: 2,
      cafe_id: 201,
      bean_id: 1001,
      date: 1670202135627,
      comment: 'I had a lovely coffee here',
      rating: 4,
    }
    return addReviews(fakeData, testDb).then((id) => {
      expect(id[0]).toBe(3)
    })
  })
})

describe('delete review by id', () => {
  it('delete review and return updated record', () => {
    expect.assertions(1)

    return deleteReview(2, testDb).then((reviews) => {
      console.log(reviews)
      expect(reviews).toBe(1)
      return null
    })
  })
})
