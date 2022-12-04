import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'

const roasterMockData = {
  roasterName: 'mockName',
  cafeName: 'mockCafeName',
}

jest.mock('../../actions/searchResult')

beforeEach(() => {
  jest.clearAllMocks()
})

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { home: roasterMockData }
  }),
}

describe('<Header />', () => {
  it('displays text from Header on page', () => {
    expect.assertions(2)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    )
    const headerTextOne = screen.getByText('Roasters', {
      exact: false,
    })
    expect(headerTextOne).toBeTruthy()
    const headerTextTwo = screen.getByText('Beans', {
      exact: false,
    })
    expect(headerTextTwo).toBeTruthy()
  })

})