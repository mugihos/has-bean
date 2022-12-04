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

const cafeData = [
  {
    id: 1,
    cafeName: 'Thunderbird Cafe',
    address: '154 Featherston Street, CBD, Wellington 6011',
    city: 'Wellington',
    roaster_id: 1,
    roasterName: 'Supreme',
    lat: '-41.2835619',
    lng: '174.7766539',
  },
  {
    id: 2,
    cafeName: 'Meshino',
    address: '75 Rutland Street, St Albans, Chirstchurch, 8014',
    city: 'Christchurch',
    roaster_id: 2,
    roasterName: 'Supreme',
    lat: '-43.50606418686944',
    lng: '172.62842349325345',
  },
  {
    id: 3,
    cafeName: 'Shore Road Cafe',
    address: '13 Shore Road, Remuera, Auckland, 1050',
    city: 'Auckland',
    roaster_id: 2,
    roasterName: 'Allpress',
    lat: '-36.86518025285166',
    lng: '174.78895079325343',
  },
]

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { roasters: singleRoaster, searchRoasters: cafeData }
  }),
}

beforeEach(() => {
  jest.clearAllMocks()
})

function AppProvider({ children }) {
  return (
    <Provider store={fakeStore}>
      <MemoryRouter initialEntries={['/roasters/1']}>
        <Routes>{children}</Routes>
      </MemoryRouter>
    </Provider>
  )
}

describe('/Roaster', () => {
  it.skip('renders without crashing and displays the roaster name', () => {
    render(<Route path="/roasters/:id" element={<Roaster />} />, {
      wrapper: AppProvider,
    })
    expect(screen.getByText(/Roastery location:/i)).toBeInTheDocument()
    const roasterName = screen.getByRole('heading')
    expect(roasterName.textContent).toBe('Supreme')
  })

  it.skip('filters and displays cafes correctly', () => {
    render(<Route path="/roasters/:id" element={<Roaster />} />, {
      wrapper: AppProvider,
    })
    const li = screen.getAllByRole('listitem')
    expect(li[0].innerHTML).toContain('Thunderbird Cafe')
    expect(li[3].innerHTML).toContain('Meshino')
  })
})
