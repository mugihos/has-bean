const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getRoasters } = require('../roasters')

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
    return getRoasters(testDb).then((roasters) => {
      //console.log(cafes)
      expect(roasters).toHaveLength(roasters.length)
      expect(roasters[0].name).toBe('Coffee Supreme')
      expect(roasters[0].location).toBe('Wellington, Auckland, Christchurch')
      expect(roasters[2].name).toBe('Kōkako Organic Coffee')
    })
  }),
    it('test for Null names in roasters', () => {
      return getRoasters(testDb).then((roasters) => {
        //console.log(cafes)
        expect(roasters).not.toBeNull()
        roasters.map((roaster) => {
          expect(roaster.url).not.toBeNull()
        })
      })
    })
})
