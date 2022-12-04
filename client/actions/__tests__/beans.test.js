import { fetchBeans, SET_BEANS } from '../beans'
import { getBeans } from '../../apis/beans'
import beans from '../../../server/db/seeds/3-beans'
jest.mock('../../apis/beans')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})
describe('fetchbeans', () => {
  it('dispatches the SET_beans action.', () => {
    getBeans.mockReturnValue(Promise.resolve(beans))
    return fetchBeans()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_BEANS,
        payload: beans,
      })
    })
  })
})
