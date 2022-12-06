import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sendReview } from '../actions/userpage'

export default function SubmitReview() {
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
    flavour: '',
    aroma: '',
    acidity: '',
    body: '',
    aftertaste: '',
  })

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(input)
    dispatch(sendReview(input))
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
            <option value="0">-- Please select your bean --</option>
            {beans?.map((bean) => {
              return (
                <option key={bean.id} value={bean.id}>
                  {bean.name}
                </option>
              )
            })}
          </select>
        </div>
        <h3>Enter your bean flavour profile</h3>
        <div>
          <label htmlFor="flavour">Flavour</label>
          <select onChange={handleChange} name="flavour">
            <option value="0">-- Please select --</option>
            <option value="1">-- 1:Clean & simple --</option>
            <option value="2">-- 2: Little more flavour --</option>
            <option value="3">-- 3: Coffee vibe --</option>
            <option value="4">-- 4: Very coffee-ee--</option>
            <option value="5">-- 5: Strong flavour --</option>
          </select>
        </div>
        <div>
          <label htmlFor="aroma">Aroma</label>
          <select onChange={handleChange} name="aroma">
            <option value="0">-- Please select --</option>
            <option value="1">-- 1: No aroma --</option>
            <option value="2">-- 2: Hind of aroma --</option>
            <option value="3">-- 3: Moderate aroma --</option>
            <option value="4">-- 4: I can smell --</option>
            <option value="5">-- 5: Aroma veil --</option>
          </select>
        </div>
        <div>
          <label htmlFor="acidity">Acidity</label>
          <select onChange={handleChange} name="acidity">
            <option value="0">-- Please select --</option>
            <option value="1">-- 1: Not sour --</option>
            <option value="2">-- 2: Bit tangy --</option>
            <option value="3">-- 3: Medium --</option>
            <option value="4">-- 4: Quite sour --</option>
            <option value="5">-- 5: Wow sour --</option>
          </select>
        </div>
        <div>
          <label htmlFor="rating">Body</label>
          <select onChange={handleChange} name="body">
            <option value="0">-- Please select --</option>
            <option value="1">-- 1: Light-light --</option>
            <option value="2">-- 2: Light --</option>
            <option value="3">-- 3: Medium --</option>
            <option value="4">-- 4: Quite bold --</option>
            <option value="5">-- 5: Strong --</option>
          </select>
        </div>
        <div>
          <label htmlFor="aftertaste">Aftertase</label>
          <select onChange={handleChange} name="aftertaste">
            <option value="0">-- Please select --</option>
            <option value="1">-- 1: Very clean --</option>
            <option value="2">-- 2: Hint of coffee left--</option>
            <option value="3">-- 3: A little coffee --</option>
            <option value="4">-- 4: Can still taste em --</option>
            <option value="5">-- 5: Heavy coffeeeee --</option>
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
          <label htmlFor="rating">Overall Rating</label>
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
