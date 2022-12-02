import { setSearchResult, SET_SEARCH_RESULT } from '../searchResult'
// import { homeContentMockData } from '../../../test/fake-data'

const [homeContentMockAnimal] = [ ]

jest.mock('../../apis/home')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('setSearchResult', () => {
  it('dispatches the SET_SEARCH_RESULT  action.', () => {
    setSearchResult.mockReturnValue(Promise.resolve(homeContentMockAnimal))
    return expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_SEARCH_RESULT,
        payload: homeContentMockAnimal,
      })
    })
  it('should console.error() if api request fails.', () => {
    expect.assertions(1)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    setSearchResult.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
})