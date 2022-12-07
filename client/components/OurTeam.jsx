import React from 'react'
import { Link } from 'react-router-dom'
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
            <li className={styles.list}>Flat White | Affogato</li>
            <li>
              <a
                href="https://github.com/clinton-b-evans"
                target="blank"
                className={`fa fa-github ${styles.github}`}
                alt="GitHub icon"
              >
                {' '}
                clinton-b-evans
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className={styles.individual}>
          <h4 className={styles.name}>Eq</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
          <ul className={styles.profile}>
            <li className={styles.list}>Flat white</li>
            <li>
              <a
                href="https://github.com/eq-hong"
                target="blank"
                className={`fa fa-github ${styles.github}`}
                alt="GitHub icon"
              >
                {' '}
                eq-hong
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className={styles.individual}>
          <h4 className={styles.name}>Gus</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
          <ul className={styles.profile}>
            <li className={styles.list}>Espressoda</li>
            <li>
              <a
                href="https://github.com/Angus-Gieseg"
                target="blank"
                className={`fa fa-github ${styles.github}`}
                alt="GitHub icon"
              >
                {' '}
                Angus-Gieseg
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className={styles.individual}>
          <h4 className={styles.name}>Ingrid</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
          <ul className={styles.profile}>
            <li className={styles.list}>Cappuccino</li>
            <li>
              <a
                href="https://github.com/ingrid-jhang"
                target="blank"
                className={`fa fa-github ${styles.github}`}
                alt="GitHub icon"
              >
                {' '}
                ingrid-jhang
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className={styles.individual}>
          <h4 className={styles.name}>Mugiho</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
          <ul className={styles.profile}>
            <li className={styles.list}>Americano</li>
            <li>
              <a
                href="https://github.com/mugihos"
                target="blank"
                className={`fa fa-github ${styles.github}`}
                alt="GitHub icon"
              >
                {' '}
                mugihos
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className={styles.individual}>
          <h4 className={styles.name}>Sarah</h4>
          <img className={styles.photo} src="/img/bean.png" alt="" />
          <ul className={styles.profile}>
            <li className={styles.list}>Iced coffee</li>
            <li>
              <a
                href="https://github.com/Sarah-Dewbery"
                target="blank"
                className={`fa fa-github ${styles.github}`}
                alt="GitHub icon"
              >
                {' '}
                Sarah-Dewbery
              </a>
            </li>
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
