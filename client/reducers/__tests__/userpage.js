import { fetchReviews } from '../../actions/userpage'
import reviews from '../userpage'

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

describe('Ive Bean reducer', () => {
  it('fetches reviews', () => {
    const state = mockData
    const action = fetchReviews()
    const state2 = reviews(state, action)
    expect(state2[1].comment).toContain(
      'What do you call a sad coffee? A depresso'
    )
  })
})
