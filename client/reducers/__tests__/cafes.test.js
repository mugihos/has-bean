import { fetchCafes } from '../../actions/cafes'
import reducer from '../cafes'

describe('cafes reducer', () => {
  test('fetch cafes action', () => {
    const state = ['Kokako Roastery Roller Door', 'Flight Coffee', 'bill']
    const action = fetchCafes()
    const state2 = reducer(state, action)
    expect(state2).toContain('Flight Coffee')
  })
  test('has initial state', () => {
    const state = reducer(undefined, { type: '@@TEST' })
    expect(state).toHaveLength(0)
  })
})
