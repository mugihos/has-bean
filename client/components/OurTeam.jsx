import React from 'react'
import styles from './OurTeam.module.scss'

export default function OurTeam() {
  return (
    <>
      <h2 className={styles.branch}>Our Team</h2>
      <div className={styles.container}>
        <div className={styles.individual}>
          <h4>NAME</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
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
