import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { submitRoaster } from '../actions/roasters'
import { useAuth0 } from '@auth0/auth0-react'
import styles from './AddRoaster.module.scss'

export default function AddRoaster() {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [input, setInput] = useState({
    name: '',
    location: '',
    details: '',
    url: '',
    image_url: '',
  })

  const location = [
    'Please select',
    'Auckland',
    'Wellington',
    'Christchurch',
    'Hamilton',
    'New Plymouth',
    'Havelock North',
  ]

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const token = await getAccessTokenSilently()
    dispatch(submitRoaster(input, token))
    setInput({
      name: '',
      location: '',
      details: '',
      url: '',
      image_url: '',
    })
    navigate('/roasters')
  }

  return (
    <>
      <div>
        <h2>Add your favourite coffee roaster</h2>
        <p>please fill in the below information</p>
      </div>
      <form>
        <div>
          <label htmlFor="roaster-name">Roaster name</label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="roaster-location">Location</label>
          <select onChange={handleChange} name="location">
            {location.map((name, i) => {
              return (
                <option value={name} key={i}>
                  {name}
                </option>
              )
            })}
          </select>
        </div>
        <div>
          <label htmlFor="roaster-detail">Details</label>
          <textarea
            type="text"
            name="details"
            id="details"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="roaster-name">Website link</label>
          <input type="text" name="url" id="url" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="roaster-image">Image link</label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            onChange={handleChange}
          />
        </div>
      </form>
      <button onClick={handleSubmit}>Add roaster</button>
    </>
  )
}
