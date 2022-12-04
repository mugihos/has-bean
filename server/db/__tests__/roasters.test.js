const knex = require('knex')
const { test } = require('../knexfile')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)
const { getRoasters, addRoaster, editRoaster } = require('../roasters')

// const fakeData = [
//   {
//     id: 1,
//     name: 'Coffee Supreme',
//     location: 'Wellington, Auckland, Christchurch',
//     details:
//       "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
//     url: 'https://coffeesupreme.com/',
//     image_url: 'https://tinyurl.com/3afx7e7m',
//   },
//   {
//     id: 2,
//     name: 'Allpress Espresso',
//     location: 'Auckland',
//     details:
//       'We invest in flavour - from our green bean selection to our roasting method and blending, all the way down to training the baristas that use our coffee in their cafes.',
//     url: 'https://www.allpressespresso.com/',
//     image_url: 'https://tinyurl.com/3e73p5we',
//   },
// ]

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getRosters', () => {
  it('gets all roasters from roaster table in db', () => {
    expect.assertions(2)
    return getRoasters(testDb).then((roaster) => {
      expect(roaster).toHaveLength(20)
      expect(roaster[0].name).toBe('Coffee Supreme')
    })
  })
})
