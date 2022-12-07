import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBeans } from '../actions/beans'
import styles from './Beans.module.scss'

export default function Beans() {
  const dispatch = useDispatch()
  let beans = useSelector((state) => state.beans)
  useEffect(() => {
    dispatch(fetchBeans())
  }, [])

  if (!beans) {
    return <div></div>
  }

  return (
    <div>
      <h2 className={styles.heading}>Bean Collection</h2>
      <div>
        <section className={styles.cardList}>
          {beans?.map((bean) => {
            return (
              <div key={bean.id}>
                <article className={styles.card}>
                  <header className={styles.cardHeader}>
                    <p>Beans</p>
                    <div className={styles.cleanH2}>
                      <Link to={`/beans/${bean.id}`} key={bean.id}>
                        <h2>{bean.beanName}</h2>
                      </Link>
                    </div>
                    <div className={styles.authorAvatar}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/440px-Roasted_coffee_beans.jpg" />
                    </div>
                    <div className={styles.tags}>
                      <li>
                        REGION: <br />
                        {bean.region}
                      </li>
                      <li>PROCESS: {bean.process}</li>
                      <li>RANGE OF ROAST: {bean.roast_degree}</li>
                      <li>FLAVOR: {bean.flavour_profile}</li>
                      <li>THE ROASTER: {bean.roasterName}</li>
                    </div>
                  </header>
                </article>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}
