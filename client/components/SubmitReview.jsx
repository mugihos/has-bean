import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sendReview } from '../actions/userpage'
import { useAuth0 } from '@auth0/auth0-react'

export default function SubmitReview() {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cafes = useSelector((state) => state.cafes)
  const beans = useSelector((state) => state.beans)

  const [input, setInput] = useState({
    roaster_id: '',
    cafe_id: '',
    bean_id: '',
    date: new Date(Date.now()),
    comment: '',
    rating: '',
  })

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const token = await getAccessTokenSilently()
    dispatch(sendReview(input, token))
    setInput('')
    navigate('/reviews')
  }

  return (
    <>
      <h1>Submit a Review</h1>
      <form>
        <div>
          <label htmlFor="roasters">Roaster</label>
          <select onChange={handleChange} name="roaster_id">
            <option value="0">-- Please select --</option>
            {cafes?.map((cafe) => {
              return (
                <option key={cafe.id} value={cafe.roasterId}>
                  {cafe.roasterName}
                </option>
              )
            })}
          </select>
        </div>
        <div>
          <label htmlFor="cafes">Cafe</label>
          <select onChange={handleChange} name="cafe_id">
            <option value="0">-- Please select --</option>
            {cafes?.map((cafe) => {
              return (
                <option key={cafe.id} value={cafe.id}>
                  {cafe.name}
                </option>
              )
            })}
          </select>
        </div>
        <div>
          <label htmlFor="beans">Beans</label>
          <select onChange={handleChange} name="bean_id">
            <option value="0">-- Please select --</option>
            {beans?.map((bean) => {
              return (
                <option key={bean.id} value={bean.id}>
                  {bean.name}
                </option>
              )
            })}
          </select>
        </div>
        <div>
          <label htmlFor="comment">
            Comment:
            <textarea
              type="text"
              id="comment"
              onChange={handleChange}
              name="comment"
            />
          </label>
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <select onChange={handleChange} name="bean_id">
            <option value="0">-- Please select --</option>
            <option value="1">-- 1: okay --</option>
            <option value="2">-- 2: average --</option>
            <option value="3">-- 3: I like it--</option>
            <option value="4">-- 4: Super --</option>
            <option value="5">-- 5: YUM --</option>
          </select>
        </div>
      </form>
      <button onClick={handleSubmit} className="submitButton">
        Submit Review
      </button>
    </>
  )
}
