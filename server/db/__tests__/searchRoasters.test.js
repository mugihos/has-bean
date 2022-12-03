const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getSearchRoasters } = require('../searchRoasters')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getSearchRoasters', () => {
  it('gets the roaster from the roasters table in the database.', () => {
    expect.assertions(2)
    return getSearchRoasters(testDb).then((searchRoastersData) => {
      expect(Object.keys(searchRoastersData)).toHaveLength(7)
      expect(searchRoastersData[0].cafeName).toBe('Thunderbird Cafe')
    })
  })
})