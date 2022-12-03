import { fetchCafes, SET_CAFES } from '../cafes'
import { getCafes } from '../../apis/cafes'
import cafes from '../../../server/db/seeds/2-cafes'
jest.mock('../../apis/cafes')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})
describe('fetchCafes', () => {
  it('dispatches the SET_CAFES action.', () => {
    getCafes.mockReturnValue(Promise.resolve(cafes))
    return fetchCafes()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_CAFES,
        payload: cafes,
      })
    })
  })
})
