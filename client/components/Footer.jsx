import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {

  return (
    <>
      <div>
        <footer className={styles.footer}>
          <div className={styles.vertical}>
          <h3>HasBean</h3>
          <p>Roasters</p>
          <p>Beans</p>
          <p>I&apos;ve Bean</p>
          </div>
          <div className={styles.vertical}>
          <h3>About</h3>
          <p>Our Purpose</p>
          <p>Our Team</p>
          </div>
          <div className={styles.vertical}>
          <h3>Contact</h3>
          <p>Contact Us</p>
          </div>
          {/* <div className={styles.footerRight}> */}
          <ul>
          <li className={styles.footerItem}><p>&copy; TEAM HASBEAN</p> </li>
          <li className={styles.footerItem}><a href="#"  className="fa fa-instagram"></a></li>
          <li className={styles.footerItem}><a href="#" className="fa fa-facebook" alt='facebook icon'></a></li>
          </ul>
          {/* </div> */}
        </footer>
      </div>
    </>
  )
}

