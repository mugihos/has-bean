import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { submitRoaster } from '../actions/roasters'

export default function AddRoaster() {
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

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(submitRoaster(input))
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
      <form>
        <label htmlFor="roaster-name">Roaster name</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
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
        <label htmlFor="roaster-detail">Details</label>
        <input
          type="text"
          name="details"
          id="details"
          onChange={handleChange}
        />
        <label htmlFor="roaster-name">Website link</label>
        <input type="text" name="url" id="url" onChange={handleChange} />
        <label htmlFor="roaster-image">Image link</label>
        <input
          type="text"
          name="image_url"
          id="image_url"
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit}>Add roaster</button>
    </>
  )
}
