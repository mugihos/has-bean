import nock from 'nock'
import { getReviews } from '../userpage'

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

describe('GET /api/v1/reviews', () => {
  it('gets reviews from api', async () => {
    const scope1 = nock('http://localhost')
      .get('/api/v1/reviews')
      .reply(200, mockData)

    return getReviews().then((reviews) => {
      expect(reviews).toHaveLength(2)
      expect(reviews[1].comment).toContain(
        'What do you call a sad coffee? A depresso'
      )
      expect(scope1.isDone()).toBe(true)
    })
  })
})
