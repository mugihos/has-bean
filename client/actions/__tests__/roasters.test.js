import { fetchRoasters, SET_ROASTERS } from '../roasters'
import { getRoasters } from '../../apis/roasters'
import roasters from '../../../server/db/seeds/1-roasters'
jest.mock('../../apis/roasters')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})
describe('fetchRoasters', () => {
  it('dispatches the SET_ROASTERS action.', () => {
    getRoasters.mockReturnValue(Promise.resolve(roasters))
    return fetchRoasters()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_ROASTERS,
        payload: roasters,
      })
    })
  })
})
