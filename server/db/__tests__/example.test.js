// Example db tests from BadgerMatch teacher led project
// Link: https://github.com/aihe-ahoaho-2022/BadgerMatch/blob/dev/server/db/__tests__/home.test.js
// More DB tests from BadgerMatch:https://github.com/aihe-ahoaho-2022/BadgerMatch/tree/dev/server/db/__tests__
const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getRandomAnimal } = require('../home')
const { mockHomelySeedData } = require('../../../test/fake-data')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getRandomAnimal', () => {
  it('gets the animal from the animals table in the database.', () => {
    expect.assertions(2)
    return getRandomAnimal(testDb).then((animal) => {
      expect(mockHomelySeedData).toContainEqual(animal)
      expect(Object.keys(animal)).toHaveLength(5)
    })
  })
})