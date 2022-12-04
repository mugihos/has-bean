import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Header from '../Header'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '@testing-library/jest-dom'

const fakeUser = {
  name: '',
  email: '',
}

jest.mock('@auth0/auth0-react')
const fakeLogout = jest.fn()

beforeEach(() => {
  useAuth0.mockReturnValue({
    isAuthenticated: true,
    user: {
      ...fakeUser,
      nickname: 'CoffeeEnthusiast01',
    },
    logout: fakeLogout,
  })
  fakeLogout.mockClear()
})

describe('<Header />', () => {
  it('displays Sign out when the user is signed in', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Header />} />
        </Routes>
      </BrowserRouter>
    )
    const header = screen.getByText(/Sign out/i)
    expect(header).not.toBeNull()
  })
  it('Allows a user to Sign out', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Header />} />
        </Routes>
      </BrowserRouter>
    )
    const link = screen.getByText('Sign out')
    fireEvent.click(link)
    expect(fakeLogout).toHaveBeenCalled()
  })
})