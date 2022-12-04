import { SET_SEARCH_RESULT } from '../../actions/searchResult'
import searchResult from '../searchResult'

const [mockData] = [
  { id: 1, name: 'Thunderbird Cafe' }
]

describe('searchResult reducer', () => {
  it('returns the action payload for type SET_SEARCH_RESULT.', () => {
    const action = {
      type: SET_SEARCH_RESULT,
      payload: mockData,
    }
    const initialState = []
    const expectedState = mockData
    const outputState = searchResult (initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = []
    const outputState = searchResult (undefined, [])

    expect(outputState).toEqual(expectedState)
  })
})