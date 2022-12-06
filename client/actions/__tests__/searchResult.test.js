import { setSearchResult, SET_SEARCH_RESULT } from '../searchResult'

beforeEach(() => {
  jest.clearAllMocks()
})

const mockData = {
  value:'Kokako Coffee Roasters'
}

describe('setSearchResult', () => {
  it('dispatches the SET_SEARCH_RESULT action', () => {
    const result = setSearchResult(mockData)
    expect(result).toEqual({
        type: SET_SEARCH_RESULT,
        payload: mockData,
      })
    })
})