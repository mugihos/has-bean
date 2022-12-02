import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Roaster from '../Roaster'

const singleRoaster = [
  {
    id: 1,
    name: 'Supreme',
    location: 'Wellington, Auckland, Christchurch',
    details:
      "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
  },
]

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { roasters: singleRoaster, searchRoasters: [] }
  }),
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/Roaster', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={fakeStore}>
        <MemoryRouter initialEntries={['/roasters/1']}>
          <Routes>
            <Route path="/roasters/:id" element={<Roaster />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    )
    expect(screen.getByText(/Roastery location:/i)).toBeInTheDocument()
  })

  describe('<Roaster />', () => {
    it('display the roaster name, location and detail', () => {
      render(
        <Provider store={fakeStore}>
          <MemoryRouter initialEntries={['/roasters/1']}>
            <Routes>
              <Route path="/roasters/:id" element={<Roaster />}></Route>
            </Routes>
          </MemoryRouter>
        </Provider>
      )
      const roasterName = screen.getByRole('heading')
      expect(roasterName.textContent).toBe('Supreme')
    })
  })

  // it('filters and displays cafes correctly', () => {})
})
