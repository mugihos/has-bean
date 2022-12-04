import { setSearchResult, updateSearchResult, SET_SEARCH_RESULT } from '../searchResult'

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const mockData = {
  value:'Kokako Coffee Roasters'
}

describe('setSearchResult', () => {
  // updateSearchResult isn't used on website...wrote function to check test
  it('dispatches the SET_SEARCH_RESULT action.', () => {
    updateSearchResult(mockData)(fakeDispatch)
    expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_SEARCH_RESULT,
        payload: mockData,
      })
    })
  
  // // unsure how to write test which doesn't use a thunk
  // it('dispatches the SET_SEARCH_RESULT action. v2', () => {
  //   setSearchResult(mockData)
  //   expect(mockData).toHaveBeenCalledWith({
  //       type: SET_SEARCH_RESULT,
  //       payload: mockData,
  //     })
  //   })
})