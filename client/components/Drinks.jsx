import React, { useState, useEffect } from 'react'
import { getDrinks } from '../apis/drinks'

const INITIAL_OPTION = 'hot'

export default function Drinks() {
  const [drinks, setDrinks] = useState([])
  const [option, setOption] = useState(INITIAL_OPTION)
  const [radio, setRadio] = useState('hot')

  useEffect(() => {
    getDrinks(radio)
      .then((response) => {
        setDrinks(response)
      })
      .catch((e) => e.message)
  }, [radio])

  function handleChange(evt) {
    setOption(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    setRadio(option)
  }
  return (
    <>
      <h2>All the coffee</h2>
      <form onSubmit={handleSubmit}>
        <div className="radio">
          <button value="hot" onClick={handleChange}>
            Hot
          </button>
        </div>
        <div className="radio">
          <button value="iced" onClick={handleChange}>
            Iced
          </button>
        </div>
      </form>

      <div>
        <ul>
          {drinks.map((drink) => {
            const { id, title, image, description, ingredients } = drink
            const ingredientsString = ingredients.join(', ')
            return (
              <li key={id}>
                <h2>{title}</h2>
                <img src={image} alt="#" width="200" />
                <p>description: {description}</p>
                <p>Ingredients: {ingredientsString}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
