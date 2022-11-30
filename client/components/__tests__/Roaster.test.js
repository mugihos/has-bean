import React from 'react'
import { render, screen } from '@testing-library/react'
import Roatser from '../Roaster'
import { BrowserRouter } from 'react-router-dom'

const fakeRoaster = {
  id: 1,
  name: 'Supreme',
  location: 'Wellington, Auckland, Christchurch',
  details:
    "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
}

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { final: winningAnimal }
  }),
}

beforeEach(() => {
  jest.clearAllMocks()
})
