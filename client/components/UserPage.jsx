import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviews } from '../actions/userpage'

// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
// import { useAuth0 } from '@auth0/auth0-react'

export default function UserPage() {
  const dispatch = useDispatch()
  const allReviews = useSelector((state) => state.reviews)
  useEffect(() => {
    dispatch(fetchReviews())
  }, [])

  return (
    <>
      <div>
        {allReviews?.map((review) => (
          <div key={review.id}>
            <ul>
              <li>{review.id}</li>
              <li>Comment: {review.comment}</li>
              <li>Rating: {review.rating}</li>
            </ul>
          </div>
        ))}
        <button>Add a review</button>
      </div>
    </>
  )
}
