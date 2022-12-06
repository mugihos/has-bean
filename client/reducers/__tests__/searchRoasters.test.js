import { SET_SEARCH_ROASTERS } from '../../actions/searchRoasters'
import searchRoasters from '../searchRoasters'

const [mockData] = [
  { id: 1, name: 'Thunderbird Cafe' },
  { id: 2, name: 'Ozone Coffee' },
  { id: 3, name: 'Flight Coffee' },
  { id: 4, name: 'The Hangar' },
]

describe('searchRoaster reducer', () => {
  it('returns the action payload for type SET_SEARCH_ROASTERS.', () => {
    const action = {
      type: SET_SEARCH_ROASTERS,
      payload: mockData,
    }
    const initialState = []
    const expectedState = mockData
    const outputState = searchRoasters (initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = []
    const outputState = searchRoasters (undefined, [])

    expect(outputState).toEqual(expectedState)
  })
})