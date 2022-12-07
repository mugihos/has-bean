import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function Footer() {
  const { logout, loginWithRedirect } = useAuth0()

  const handleLogOff = (e) => {
    // change links to buttons to remove prevent default
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    // change links to buttons to remove prevent default
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <div>
        <footer className={styles.footer}>
          <div className={styles.vertical}>
            <h3>HasBean</h3>
            <p>
              <Link to="/roasters">Roasters</Link>
            </p>
            <p>
              <Link to="/beans">Beans</Link>
            </p>
            <p>
              <IfAuthenticated>
                <Link to="/reviews">I&apos;ve Bean</Link>
              </IfAuthenticated>
            </p>
            {/* change to buttons! so we can remove prevent default  */}
            <IfAuthenticated>
              <Link to="/" onClick={handleLogOff}>
                Sign out
              </Link>
            </IfAuthenticated>
            <IfNotAuthenticated>
              <Link to="/" onClick={handleSignIn}>
                Register | Login
              </Link>
            </IfNotAuthenticated>
          </div>

          <div className={styles.vertical}>
            <h3>Fun</h3>
            <p>
              <Link to="/drinks">Drinks</Link>
            </p>
            <p>
              <Link to="/quiz">Coffee Quiz</Link>
            </p>
          </div>

          <div className={styles.vertical}>
            <h3>About</h3>
            <p>
              <Link to="/story">Our Story</Link>
            </p>
            <p>
              <Link to="/team">Our Team</Link>
            </p>
          </div>

          <div className={styles.vertical}>
            <h3>Contact</h3>
            <p>
              <Link to="/contact">Contact Us</Link>
            </p>
          </div>

          <ul>
            <li className={styles.footerItem}>
              <Link to="/" className={`fa fa-instagram ${styles.icons}`}></Link>
            </li>
            <li className={styles.footerItem}>
              <Link
                to="/"
                className={`fa fa-facebook ${styles.icons}`}
                alt="facebook icon"
              ></Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}
