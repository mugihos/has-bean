import React from 'react'
import { render, screen } from '@testing-library/react'
import Roatser from '../Roaster'
import { BrowserRouter } from 'react-router-dom'
import { INTERNAL } from 'sqlite3'

const singleRoaster = {
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
    return { roaster: fakeRoaster }
  }),
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('<Roaster />', () => {
  it('display the roaster name, location and detail', () => {
    expect.assertions(2)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Roaster />
        </BrowserRouter>
      </Provider>
    )
    const roasterName = screen.getByText(singleRoaster.name, { expect: false })
    expect(roasterName).toBeTruthy()
    const roasterLocation = screen.getByRole('heading')
    expect(roasterLocation.textContent).toBe('Roaster')
  })
})
