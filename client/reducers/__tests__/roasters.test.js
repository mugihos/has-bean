import { fetchRoasters } from '../../actions/roasters'
import reducer from '../roasters'

describe('Roasters Reducer Tests', () => {
  test('the fetchRoasters action', () => {
    const state = ['Supreme', 'Flight Coffee', 'Peoples Coffee']
    const action = fetchRoasters()
    const state2 = reducer(state, action)
    expect(state2).toContain('Flight Coffee')
  })
  test('has initial state', () => {
    const state = reducer(undefined, { type: '@@TEST' })
    expect(state).toHaveLength(0)
  })
})
