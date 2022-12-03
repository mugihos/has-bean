const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getCafes } = require('../cafes')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('get cafes', () => {
  it('gat all cafes', () => {
    return getCafes(testDb).then((cafes) => {
      //console.log(cafes)
      expect(cafes).toHaveLength(7)
      expect(cafes[0].name).toBe('Thunderbird Cafe')
    })
  })
})
