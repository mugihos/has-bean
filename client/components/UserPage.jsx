import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviews, removeReview } from '../actions/userpage'
import { useAuth0 } from '@auth0/auth0-react'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'


export default function UserPage() {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const navigate = useNavigate
  const allReviews = useSelector((state) => state.reviews)
  useEffect(() => {
    dispatch(fetchReviews())
  }, [])

  if (!allReviews) {
    return <div></div>
  }

  const handleDelete = async (e, id) => {
    const token = await getAccessTokenSilently()
    dispatch(removeReview(id, token))
    navigate('/review')
  }

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
            <button
              onClick={(e) => {
                handleDelete(e, review.id)
              }}
            >
              Delete comment
            </button>
          </div>
        ))}
        <Link to="/reviews/add">
          <button>Add a review</button>
        </Link>
      </div>
    </>
  )
}
