import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
      <ul>
        {beans?.map((bean) => {
          return (
            <div key={bean.id}>
              <h2>{bean.beanName}</h2>
              <li>REGION: {bean.region}</li>
              <li>PROCESS: {bean.process}</li>
              <li>RANGE OF ROAST: {bean.roast_degree}</li>
              <li>FLAVOR: {bean.flavour_profile}</li>
              <li>THE ROASTER: {bean.roasterName}</li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
