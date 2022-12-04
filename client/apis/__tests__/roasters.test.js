import nock from 'nock'
import { getRoasters, getRoasters, postRoaster } from '../roasters'

describe('GET /api/v1/roasters', () => {
  it('gets roasters from api', async () => {
    const scope1 = nock('http://localhost')
      .get('/api/v1/roasters')
      .reply(200, {
        results: [
          { id: 1, name: 'Coffee Supreme' },
          { id: 2, name: 'Allpress Espresso' },
          { id: 3, name: 'KoKōkako Organic Coffee' },
          { id: 4, name: 'Mojo Coffee Roasters' },
        ],
      })

    return getRoasters().then((roasters) => {
      expect(roasters.results).toHaveLength(4)
      expect(roasters.results[0].name).toBe('Coffee Supreme')
      expect(roasters.results[3].name).toBe('Mojo Coffee Roasters')
      expect(scope1.isDone()).toBe(true)
    })
  })
})
import { addRoaster } from '../../../server/db/roasters'

const fakeGetData = [
  {
    id: 1,
    name: 'Coffee Supreme',
    location: 'Wellington, Auckland, Christchurch',
    details:
      "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
    url: 'https://coffeesupreme.com/',
    image_url: 'https://tinyurl.com/3afx7e7m',
  },
  {
    id: 2,
    name: 'Allpress Espresso',
    location: 'Auckland',
    details:
      'We invest in flavour - from our green bean selection to our roasting method and blending, all the way down to training the baristas that use our coffee in their cafes.',
    url: 'https://www.allpressespresso.com/',
    image_url: 'https://tinyurl.com/3e73p5we',
  },
]

const fakeNewData = {
  name: 'Flight Coffee',
  location: 'Wellington',
  details:
    'Flight Coffee is a family of driven people that work together to produce amazing coffee, while always aiming to have the best impact we can on the industry and the lives it connects',
  image_url:
    'https://cdn.shopify.com/s/files/1/0104/2682/files/logo_gold-06_395x.png?v=1638386421',
}

const returnedId = { id: 21 }

describe('GET /api/v1/roasters', () => {
  it('gets all the roaster content', async () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .get('/api/v1/roasters')
      .reply(200, fakeGetData)

    const receivedData = await getRoasters()
    expect(receivedData).toEqual(fakeGetData)
    scope.done()
  })
})

describe('POST /api/v1/roasters/add', () => {
  it('adds new roaster and gets a new id back', async () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .post('/api/v1/roasters/add')
      .reply(200, returnedId)

    const newResult = await postRoaster(fakeNewData)
    expect(newResult).toEqual(returnedId)
    scope.done()
  })
})
