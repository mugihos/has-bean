import { getRoasters, postRoaster } from '../../apis/roasters'
import {
  fetchRoasters,
  SET_ROASTERS,
  submitRoaster,
  ADD_ROASTER,
} from '../roasters'

const fakeDispatch = jest.fn()

jest.mock('../../apis/roasters')

beforeEach(() => {
  jest.clearAllMocks()
})

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

describe('fetchRoasters', () => {
  it('dispatches the SET_ROASTERS action.', () => {
    expect.assertions(1)
    getRoasters.mockReturnValue(Promise.resolve(fakeGetData))
    return fetchRoasters()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_ROASTERS,
        payload: fakeGetData,
      })
    })
  })
})

describe('submitRoasters', () => {
  it('dispatches the ADD_ROASTER action', () => {
    expect.assertions(2)
    postRoaster.mockReturnValue(Promise.resolve(1))
    return submitRoaster(fakeNewData)(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: ADD_ROASTER,
        payload: { ...fakeNewData, id: 1 },
      })
      expect(postRoaster).toHaveBeenCalledWith(fakeNewData)
    })
  })
  it('should error when api request fails', () => {
    expect.assertions(1)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    postRoaster.mockImplementation(() =>
      Promise.reject(new Error('no new roaster posted'))
    )

    return submitRoaster()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('no new roaster posted')
    })
  })
})
