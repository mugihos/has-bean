import React, { useState, useEffect } from 'react'
import { getNotFound } from '../apis/notFound'
import styles from './NotFound.module.scss'

export default function NotFound() {
  const [funImage, setFunImage] = useState(null)

  useEffect(() => {
    getNotFound()
      .then((coffeeApiImage) => {
        setFunImage(coffeeApiImage?.file)
      })
      .catch((e) => {
        console.error(e.message)
      })
  }, [])

  console.log('funImage', funImage);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          404 NOT FOUND
        </h1>
        {funImage && (
          <img className={styles.image} src={funImage} alt='404image' />
        )}
      </div>
    </>
  )
}