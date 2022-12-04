import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMoreCafe, fetchCafes } from '../actions/cafes'
import { useNavigate } from 'react-router-dom'
//import styles from './AddCafe.module.scss'

export default function AddCafe() {
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

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(addMoreCafe(newCafe))
    dispatch(fetchCafes())
    setNewCafe('')
    navigate('/')
  }

  return (
    <div>
      <h2>ADD NEW CAFE</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Cafe Name:
            <input
              id="name"
              onChange={handleChange}
              value={newCafe.name}
              name="name"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="address">
            Address:
            <input
              id="address"
              onChange={handleChange}
              value={newCafe.address}
              name="address"
            />
          </label>
        </div>
        <div>
          <label htmlFor="city">
            City:
            <input
              id="city"
              onChange={handleChange}
              value={newCafe.city}
              name="city"
            />
          </label>
        </div>
        <div>
          <label htmlFor="roaster_id">Roaster:</label>
          <select id="roaster_id" onChange={handleChange} name="roaster_id">
            <option value="0">--Please select--</option>
            {roasters.map(({ id, name }) => {
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
            lat:
            <input
              id="lat"
              onChange={handleChange}
              value={newCafe.lat}
              name="lat"
            />
          </label>
        </div>
        <div>
          <label htmlFor="lng">
            About:
            <input
              id="lng"
              onChange={handleChange}
              value={newCafe.lng}
              name="lng"
            />
          </label>
        </div>
        <button>Submit :p</button>
      </form>
    </div>
  )
}
