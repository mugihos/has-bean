import React, { useState, useEffect } from 'react'
import { getDrinks } from '../apis/drinks'
import styles from './Drinks.module.scss'

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

      <div >
        <ul className={styles.container}>

          {drinks.map((drink) => {
            const { id, title, description, ingredients } = drink
            const ingredientsString = ingredients.join(', ')
            const image = `img/drinks/${title.toLowerCase()}.png`
            return (
              <div className={styles.item} key={id}>
              <li>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.image}>
                <img src={image} alt="#" width="200" />
                </div>
                <p>{description}</p>
                <p><b>Ingredients</b><br></br>  {ingredientsString}</p>
              </li>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}
