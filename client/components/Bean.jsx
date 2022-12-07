import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './Bean.module.scss'

export default function Bean() {
  const params = useParams()
  const beanId = Number(params.id)
  const beans = useSelector((state) => state.beans)
  const singleBean = beans.find((beans) => beans.id === beanId)

  return (
    <>
      <div>
        {singleBean && (
          <div className={styles.beanContainer}>
            <h2 className={styles.heading}>{singleBean.beanName}</h2>
            <img
              className={styles.BeanImg}
              src={singleBean.roaster_image}
              alt={singleBean.roasterName}
              width="230"
            />
            <h3 className={styles.headingTwo}>
              Roaster: {singleBean.roasterName}
            </h3>

            <p>Region: {singleBean.region}</p>
            <p>Process: {singleBean.process}</p>
            <p>Roast: {singleBean.roast_degree}</p>
            <p>Flavour profile: {singleBean.flavour_profile}</p>
          </div>
        )}
      </div>
    </>
  )
}
