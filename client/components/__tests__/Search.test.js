import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Search from '../Search'

const roasterMockData = [
  {
    cafeName: 'Thunderbird Cafe',
    address: '154 Featherston Street, CBD, Wellington 6011',
    city: 'Wellington',
    roasterName: 'Supreme',
    location: 'Wellington, Auckland, Christchurch',
    details:
      "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
    roasterId: 1,
    id: 1,
    lat: '-41.2835619',
    lng: '174.7766539',
  },
  {
    cafeName: 'Meshino',
    address: '75 Rutland Street, St Albans, Chirstchurch, 8014',
    city: 'Christchurch',
    roasterName: 'Allpress',
    location: 'Auckland',
    details:
      'We invest in flavour - from our green bean selection to our roasting method and blending, all the way down to training the baristas that use our coffee in their cafes.',
    roasterId: 2,
    id: 2,
    lat: '-43.50606418686944',
    lng: '172.62842349325345',
  },
]

jest.mock('../../actions/searchResult')

beforeEach(() => {
  jest.clearAllMocks()
})

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { roasters: roasterMockData }
  }),
}

describe('<Search />', () => {
  it('displays label text Search on page', () => {
    expect.assertions(1)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>
    )
    const textOnPage = screen.getByText('Search', {
      exact: false,
    })
    expect(textOnPage).toBeTruthy()
  })

  it('displays placeholder text.', () => {
    expect.assertions(1)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>
    )
    const placeholderText = screen.queryByPlaceholderText(/favourite coffee/i)
    expect(placeholderText).toBeTruthy()
  })
})
