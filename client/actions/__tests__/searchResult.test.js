import { setSearchResult, updateSearchResult, SET_SEARCH_RESULT } from '../searchResult'

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const mockData = {
  value:'Kokako Coffee Roasters'
}

describe('setSearchResult', () => {
  // TODO: write a test where the action doesn't use a thunk
  it.skip('dispatches the SET_SEARCH_RESULT action. v2', () => {
    setSearchResult(mockData)
    expect(mockData).toHaveBeenCalledWith({
        type: SET_SEARCH_RESULT,
        payload: mockData,
      })
    })
})