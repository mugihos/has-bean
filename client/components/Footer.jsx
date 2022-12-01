import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {

  return (
    <>
      <div>
        <footer className={styles.footer}>
          <div className={styles.vertical}>
          <h3>HasBean</h3>
          <p><a href="/roasters">Roasters</a></p>
          <p><a href="/beans">Beans</a></p>
          <p><a href="/ivebeen">I&apos;ve Bean</a></p>
          <p><a href="/login">Log in</a></p>
          </div>
          <div className={styles.vertical}>
          <h3>About</h3>
          <p><a href="/purpose">Our Purpose</a></p>
          <p><a href="/team">Our Team</a></p>
          </div>
          <div className={styles.vertical}>
          <h3>Contact</h3>
          <p><a href="/contact">Contact Us</a></p>
          </div>
          {/* <div className={styles.footerRight}> */}
          <ul>
          {/* <li className={styles.footerItem}><p>&copy; TEAM HASBEAN</p> </li> */}
          <li className={styles.footerItem}><a href="#"  className="fa fa-instagram"></a></li>
          <li className={styles.footerItem}><a href="#" className="fa fa-facebook" alt='facebook icon'></a></li>
          </ul>
          {/* </div> */}
        </footer>
      </div>
    </>
  )
}

