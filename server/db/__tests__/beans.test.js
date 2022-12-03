const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getBeans } = require('../beans')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('get beans', () => {
  it('gat all beans', () => {
    return getBeans(testDb).then((beans) => {
      expect(beans).toHaveLength(10)
      expect(beans[0].beanName).toBe('Supreme blend')
      expect(beans[9].beanName).toBe('Hodson blend')
    })
  })
})
