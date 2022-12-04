import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import roasters from '../../../server/db/seeds/1-roasters'
import Roasters from '../Roasters'
import { fetchRoasters } from '../../actions/roasters'

const resultContentMockData = roasters

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
