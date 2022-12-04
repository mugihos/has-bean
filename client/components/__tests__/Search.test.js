import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Search from '../Search'
import { setSearchResult } from '../../actions/searchResult'

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