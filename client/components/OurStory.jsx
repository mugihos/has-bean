import React from 'react'
import styles from './OurStory.module.scss'

export default function OurStory() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles}>
          <img className={styles.photo} src="img/cup.png  " alt="" />
        </div>
        <div className={styles.story}>
          <h2 className={styles.branchLogo}>Our Story</h2>
          <h3 className={styles.branchSub}>
            Ever wanted a place to store your coffee experiences? We created a
            space where you can record and share your favourite roaster, cafe
            and coffee beans. This is a space for all who are passionate about
            cafe and coffee culture.
          </h3>
        </div>
      </div>
    </>
  )
}
