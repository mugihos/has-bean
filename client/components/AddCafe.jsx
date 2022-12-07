import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMoreCafe } from '../actions/cafes'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchSearchRoasters } from '../actions/searchRoasters'
import styles from './AddCafe.module.scss'

export default function AddCafe() {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let roasters = useSelector((state) => state.roasters)

  const [newCafe, setNewCafe] = useState({
    name: '',
    address: '',
    city: '',
    roaster_id: '',
    lat: '',
    lng: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setNewCafe((result) => {
      return { ...result, [name]: value }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const token = await getAccessTokenSilently()
    dispatch(addMoreCafe(newCafe, token))
    dispatch(fetchSearchRoasters())
    setNewCafe('')
    navigate('/')
  }

  return (
    <div>
      <h2 className={styles.heading}>Add new cafe☕</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Cafe:
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={newCafe?.name || ''}
              name="name"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="address">
            Address:
            <textarea
              type="text"
              id="address"
              onChange={handleChange}
              value={newCafe?.address || ''}
              name="address"
            />
          </label>
        </div>
        <div>
          <label htmlFor="city">
            City:
            <input
              type="text"
              id="city"
              onChange={handleChange}
              value={newCafe?.city || ''}
              name="city"
            />
          </label>
        </div>
        <div>
          <label htmlFor="roaster_id">Roaster:</label>
          <select
            className={styles.selector}
            id="roaster_id"
            onChange={handleChange}
            name="roaster_id"
          >
            <option value="0">--Please select--</option>
            {roasters?.map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              )
            })}
          </select>
        </div>

        <div>
          <label htmlFor="lat">
            Latitude:
            <input
              type="text"
              id="lat"
              onChange={handleChange}
              value={newCafe?.lat || ''}
              name="lat"
            />
          </label>
        </div>
        <div>
          <label htmlFor="lng">
            Longitude:
            <input
              type="text"
              id="lng"
              onChange={handleChange}
              value={newCafe?.lng || ''}
              name="lng"
            />
          </label>
        </div>
        <div className={styles.buttonCenter}>
          <button className={styles.addButton}>Submit</button>
        </div>
      </form>
    </div>
  )
}
