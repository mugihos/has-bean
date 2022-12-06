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
          <div key={location}>
            <h3>{location}</h3>
            <section className={styles.cardList}>
              {/* <ul className={styles.flexcontainer}> */}
              {roasters
                ?.filter((roaster) => roaster.location.includes(location))
                .map((roaster) => {
                  return (
                    <div
                      key={location + roaster.id}
                      // className={styles.beanItem}
                    >
                      <article className={styles.card}>
                        <header className={styles.cardHeader}>
                          <p>{location}</p>
                          <Link to={`/roasters/${roaster.id}`}>
                            {roaster.name}
                            <h2>{roaster.name}</h2>
                          </Link>
                        </header>

                        <div className={styles.cardAuthor}>
                          <a className={styles.authorAvatar} href="#">
                            <img src={roaster.image_url} />
                          </a>

                          <div className={styles.authorName}>
                            <div className={styles.authorNamePrefix}>
                              Roaster
                            </div>
                            {roaster.name}
                          </div>
                          <div className={styles.tags}>
                            <a href="#">thing1</a>
                            <a href="#">thing2</a>
                          </div>
                        </div>
                      </article>
                    </div>
                  )
                })}
            </section>
          </div>
        )
      })}
    </div>
  )
}
