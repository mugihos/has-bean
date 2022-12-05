import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function Header() {
  const { logout, loginWithRedirect, user } = useAuth0()

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <Link to="/">
            <h1 className={styles.title}>HAS BEAN</h1>
          </Link>
        </div>
        <div className={styles.links}>
          <Link to="/roasters">Roasters</Link>
          <Link to="/beans">Beans</Link>
          <Link to="/userpage">I've Bean</Link>
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
