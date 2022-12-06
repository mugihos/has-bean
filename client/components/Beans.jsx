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
      <h2>Bean Collection</h2>
      <div>
        <ul className={styles.ul}>
          {beans?.map((bean) => {
            return (
              <Link to={`/beans/${bean.id}`} key={bean.id} >
              <div className={styles.beanItem}>
                <h2 className={styles.h2}>{bean.beanName}</h2>
                <li>REGION: {bean.region}</li>
                <li>PROCESS: {bean.process}</li>
                <li>RANGE OF ROAST: {bean.roast_degree}</li>
                <li>FLAVOR: {bean.flavour_profile}</li>
                <li>THE ROASTER: {bean.roasterName}</li>
              </div>
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
