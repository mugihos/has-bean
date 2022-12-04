import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Roasters from '../Roasters'
import { fetchRoasters } from '../../actions/roasters'

const resultContentMockData = [
  {
    id: 1,
    name: 'Supreme',
    location: 'Wellington, Auckland, Christchurch',
    details:
      "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
    url: null,
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
      resultContentMockData[0].location
    ) // uses actual value
    expect(roasterLocation[0]).toBeInTheDocument()
  })
})
