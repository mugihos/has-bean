import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Roasters from '../Roasters'

const resultContentMockData = [
  {
    id: 1,
    name: 'Coffee Supreme',
    location: 'Wellington, Auckland, Christchurch',
    details:
      "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
    url: 'https://coffeesupreme.com/',
    image_url: 'https://tinyurl.com/3afx7e7m',
  },
  {
    id: 2,
    name: 'Allpress Espresso',
    location: 'Auckland',
    details:
      'We invest in flavour - from our green bean selection to our roasting method and blending, all the way down to training the baristas that use our coffee in their cafes.',
    url: 'https://www.allpressespresso.com/',
    image_url: 'https://tinyurl.com/3e73p5we',
  },
  {
    id: 3,
    name: 'Kōkako Organic Coffee',
    location: 'Auckland',
    details:
      "It all started in the late 90s when our founders, Helen and Christian, had this wild idea to be New Zealand's first organic coffee roasters.",
    url: 'https://www.kokako.co.nz/',
    image_url: 'https://tinyurl.com/3h47r3a4',
  },
]

jest.mock('../../actions/roasters')

beforeEach(() => {
  jest.clearAllMocks()
})

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { roasters: resultContentMockData }
  }),
}

describe('<Roasters /> Test Suite', () => {
  it('Displays Roaster name from redux state', () => {
    expect.assertions(1)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Roasters />
        </BrowserRouter>
      </Provider>
    )

    const roasterName = screen.getAllByText(resultContentMockData[0].name) // uses actual value
    expect(roasterName[0]).toBeInTheDocument()
  })
  it('Displays Roaster Location from redux state', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Roasters />
        </BrowserRouter>
      </Provider>
    )

    const roasterLocation = screen.getAllByText(
      'Wellington'
    ) // uses hard coded value
    expect(roasterLocation[0]).toBeInTheDocument()
  })
})
