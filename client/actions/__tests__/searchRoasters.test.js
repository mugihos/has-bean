import { fetchSearchRoasters, SET_SEARCH_ROASTERS } from '../searchRoasters'
import { getSearchRoasters } from '../../apis/searchRoasters'

jest.mock('../../apis/searchRoasters')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const mockData = [
  { id: 1, name: 'Thunderbird Cafe' },
  { id: 2, name: 'Ozone Coffee' },
  { id: 3, name: 'Flight Coffee' },
  { id: 4, name: 'The Hangar' },
]

describe('fetchSearchRoasters', () => {
  it('dispatches the SET_SEARCH_ROASTERS action.', () => {
    getSearchRoasters.mockReturnValue(Promise.resolve(mockData))
    return fetchSearchRoasters()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_SEARCH_ROASTERS,
        payload: mockData,
      })
    })
  })
  it('should console.error() if api request fails.', () => {
    expect.assertions(1)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getSearchRoasters.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return fetchSearchRoasters()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})