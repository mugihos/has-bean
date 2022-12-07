import React from 'react'
import styles from './OurTeam.module.scss'

export default function OurTeam() {
  return (
    <>
      <h2 className={styles.branch}>Our Team</h2>
      <div className={styles.container}>
        <div className={styles.individual}>
          <h4 className={styles.name}>Clinton</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
          <ul className={styles.profile}>
            <li className={styles.list}>Hello hello</li>
            <li>GitHub:</li>
            <li></li>
          </ul>
        </div>
        <div className={styles.individual}>
          <h4 className={styles.name}>Eq</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
          <ul className={styles.profile}>
            <li className={styles.list}>Hello hello</li>
            <li>GitHub:</li>
            <li></li>
          </ul>
        </div>
        <div className={styles.individual}>
          <h4 className={styles.name}>Gus</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
          <ul className={styles.profile}>
            <li className={styles.list}>Hello hello</li>
            <li>GitHub:</li>
            <li></li>
          </ul>
        </div>
        <div className={styles.individual}>
          <h4 className={styles.name}>Ingrid</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
          <ul className={styles.profile}>
            <li className={styles.list}>Hello hello</li>
            <li>GitHub:</li>
            <li></li>
          </ul>
        </div>
        <div className={styles.individual}>
          <h4 className={styles.name}>Mugiho</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
          <ul className={styles.profile}>
            <li className={styles.list}>Hello hello</li>
            <li>GitHub:</li>
            <li></li>
          </ul>
        </div>
        <div className={styles.individual}>
          <h4 className={styles.name}>Sarah</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
          <ul className={styles.profile}>
            <li className={styles.list}>Hello hello</li>
            <li>GitHub:</li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  )
}
{
  /* <h3>
Meet us! We are 6 developers passionate about creating a platform that{' '}
</h3> */
}
