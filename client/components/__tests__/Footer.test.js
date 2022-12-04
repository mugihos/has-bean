import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../Footer'

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

describe('<Search />', () => {
  it('displays text from Footer on page', () => {
    expect.assertions(2)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    )
    const footerTextOne = screen.getByText('HasBean', {
      exact: false,
    })
    expect(footerTextOne).toBeTruthy()
    const footerTextTwo = screen.getByText('About', {
      exact: false,
    })
    expect(footerTextTwo).toBeTruthy()
  })

})