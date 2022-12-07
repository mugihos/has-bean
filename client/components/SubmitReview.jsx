import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sendReview } from '../actions/userpage'
import { useAuth0 } from '@auth0/auth0-react'
import styles from './SubmitReview.module.scss'

export default function SubmitReview() {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cafes = useSelector((state) => state.cafes)
  const beans = useSelector((state) => state.beans)
  const roasters = useSelector((state) => state.roasters)

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

  const selectedRoasterId = input.roaster_id || null

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }

  function handleRoasterChange(event) {
    setInput({ ...input, roaster_id: event.target.value, bean_id: '' })
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
      <h1 className={styles.heading}>Submit a Review</h1>
      <form className={styles.reviewForm}>
        <div className={styles.roasterForm}>
          <h3 className={styles.heading}>Enter your coffee detail</h3>
          <div className={styles.roasterBean}>
            <div>
              <label htmlFor="roasters">Roaster</label>
              <select onChange={handleRoasterChange} name="roaster_id" required>
                <option value="0">-- Please select --</option>
                {roasters?.map((roaster) => {
                  return (
                    <option key={roaster.id} value={roaster.id}>
                      {roaster.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <div>
              {selectedRoasterId && (
                <>
                  <label htmlFor="beans">Beans</label>
                  <select onChange={handleChange} name="bean_id" required>
                    <option value="0">-- Please select --</option>
                    {beans
                      ?.filter((bean) => {
                        return bean.roaster_id === Number(selectedRoasterId)
                      })
                      .map((bean) => {
                        return (
                          <option key={bean.id} value={bean.id}>
                            {bean.beanName}
                          </option>
                        )
                      })}
                  </select>
                </>
              )}
            </div>
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
            <label htmlFor="comment">Comment:</label>
            <textarea
              type="text"
              id="comment"
              onChange={handleChange}
              name="comment"
            />
          </div>
          <div>
            <label htmlFor="rating">Overall Rating</label>
            <select onChange={handleChange} name="rating">
              <option value="0">-- Please select --</option>
              <option value="1">-- 1: okay --</option>
              <option value="2">-- 2: average --</option>
              <option value="3">-- 3: I like it--</option>
              <option value="4">-- 4: Super --</option>
              <option value="5">-- 5: YUM --</option>
            </select>
          </div>
        </div>

        <div className={styles.taste}>
          <h3 className={styles.heading}>Enter your bean flavour profile</h3>

          <div>
            <label htmlFor="flavour">Flavour</label>
            <select onChange={handleChange} name="flavour">
              <option value="0">-- Please select --</option>
              <option value="1">-- 1:Clean & simple --</option>
              <option value="2">-- 2: Little more flavour --</option>
              <option value="3">-- 3: Coffee vibe --</option>
              <option value="4">-- 4: Very coffeeeee --</option>
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
            <label htmlFor="aftertaste">Aftertaste</label>
            <select onChange={handleChange} name="aftertaste">
              <option value="0">-- Please select --</option>
              <option value="1">-- 1: Very clean --</option>
              <option value="2">-- 2: Hint of coffee left--</option>
              <option value="3">-- 3: A little coffee --</option>
              <option value="4">-- 4: Can still taste em --</option>
              <option value="5">-- 5: Heavy coffeeeee --</option>
            </select>
          </div>
        </div>
      </form>
      <div className={styles.buttonLocation}>
        <button onClick={handleSubmit} className="submitButton">
          Submit Review
        </button>
      </div>
    </>
  )
}
