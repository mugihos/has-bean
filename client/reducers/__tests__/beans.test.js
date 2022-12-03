import { fetchBeans } from '../../actions/beans'
import reducer from '../beans'

describe('beans reducer', () => {
  test('fetch beans action', () => {
    const state = ['bean1', 'bean2', 'beanbean']
    const action = fetchBeans()
    const state2 = reducer(state, action)
    expect(state2).toContain('beanbean')
  })
  test('has initial state', () => {
    const state = reducer(undefined, { type: '@@TEST' })
    expect(state).toHaveLength(0)
  })
})
