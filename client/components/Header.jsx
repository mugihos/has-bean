import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function Header() {
  const { logout, loginWithRedirect, user } = useAuth0()

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
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              width="200"
              src="../../img/logo-dark.svg"
              alt="hasBean logo"
            ></img>
          </Link>
        </div>
        <div className={styles.links}>
          {/* change to buttons! so we can remove prevent default  */}
          <Link to="/roasters">Roasters</Link>
          <Link to="/beans">Beans</Link>
          <Link to="/drinks">Drinks</Link>
          <Link to="/quiz">Coffee Quiz</Link>
          <Link to="/reviews">I&apos;ve Bean</Link>
        </div>

        <div className={styles.auth}>
          <IfAuthenticated>
            Hello {user?.nickname} &nbsp;|&nbsp;
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
      </nav>
    </>
  )
}
