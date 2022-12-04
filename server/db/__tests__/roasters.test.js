const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getRoasters, addRoaster } = require('../roasters')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('get roasters', () => {
  it('get all roasters', () => {
    expect.assertions(4)
    return getRoasters(testDb).then((roasters) => {
      expect(roasters).toHaveLength(roasters.length)
      expect(roasters[0].name).toBe('Coffee Supreme')
      expect(roasters[0].location).toBe('Wellington, Auckland, Christchurch')
      expect(roasters[2].name).toBe('Kōkako Organic Coffee')
    })
  })
  it('test for Null names in roasters', () => {
    expect.assertions(1)
    return getRoasters(testDb).then((roasters) => {
      expect(roasters).not.toBeNull()
    })
  })
  it('add a new roaster to the roatser table in db', () => {
    expect.assertions(1)
    const fakeData = {
      name: 'Coffee Test',
      location: 'Wellington',
      details: 'Better coffee for all',
      url: 'https://coffeesupreme.com/',
      image_url: 'https://tinyurl.com/3afx7e7m',
    }
    return addRoaster(fakeData, testDb).then((id) => {
      expect(id[0]).toBe(21)
    })
  })
})
