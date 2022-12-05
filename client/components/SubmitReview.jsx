import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function SubmitReview() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [newReview, setNewReview] = useState(null)

  function handleChange(event) {}

  function handleSubmit(event) {}

  return (
    <>
      <h1>Submit a Review</h1>
      <div className="formWrapper">
        <div className="buttonWrapper">
          <button onClick={handleSubmit} className="submitButton">
            Submit Review
          </button>
        </div>
      </div>
    </>
  )
}
