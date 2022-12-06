import { fetchReviews, SET_REVIEWS } from '../userpage'
import { getReviews } from '../../apis/userpage'

const mockData = [
  {
    id: 1,
    auth_user_id: 1,
    roaster_id: 2,
    cafe_id: 201,
    bean_id: 1001,
    comment: 'I had a lovely coffee here',
    rating: 4,
  },
  {
    id: 2,
    auth_user_id: 2,
    roaster_id: 1,
    cafe_id: 202,
    bean_id: 1005,
    comment: 'What do you call a sad coffee? A depresso',
    rating: 1,
  },
]

jest.mock('../../apis/userpage')
const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetch Reviews', () => {
  it('dispatches the reviews', () => {
    getReviews.mockReturnValue(Promise.resolve(mockData))
    return fetchReviews()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_REVIEWS,
        payload: mockData,
      })
    })
  })
})
