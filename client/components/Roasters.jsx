import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Roasters.module.scss'
import { useSelector } from 'react-redux'

export default function Roasters() {
  let roasters = useSelector((state) => state.roasters)

  if (!roasters) {
    return <div>Loading Roasters... ps. David is best</div>
  }

  const cities = new Set()
  roasters.map((roaster) =>
    roaster.location.split(',').map((location) => cities.add(location.trim()))
  )
  const locations = Array.from(cities)

  return (
    <div>
      <h2>Welcome to Roasters</h2>
      {locations.map((location) => {
        return (
          <>
            <h3 key={location.id}>{location}</h3>
            <ul className={styles.flexcontainer}>
              {roasters
                ?.filter((roaster) => roaster.location.includes(location))
                .map((roaster) => {
                  return (
                    <div key={roaster.id} className={styles.beanItem}>
                      <Link to={`/roasters/${roaster.id}`}>
                        {roaster.name}
                        <img
                          className={styles.roasterImg}
                          src={roaster.image_url}
                          alt={roaster.name}
                        />
                      </Link>
                    </div>
                  )
                })}
            </ul>
          </>
        )
      })}
    </div>
  )
}
